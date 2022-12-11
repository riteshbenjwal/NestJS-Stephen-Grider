import { Injectable, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signup(email: string, password: string) {
    //See if email is in use
    const users = await this.usersService.find(email);
    if (users.length) {
      throw new BadRequestException('Email in use');
    }
    //Hash user password
    // Generate a salt
    const salt = randomBytes(8).toString('hex');

    // Hash the password with the salt
    const hash = (await scryptAsync(password, salt, 32)) as Buffer;

    // Join the hashed password with the salt
    const result = salt + '.' + hash.toString('hex');

    //Create new user in db
    const user = await this.usersService.create(email, result);

    //return user

    return user;
  }
  async signin(email: string, password: string) {
    const [user] = await this.usersService.find(email);
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    const [salt, storedHash] = user.password.split('.');

    const hash = (await scryptAsync(password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('Invalid credentials');
    }
    return user;
  }
}
