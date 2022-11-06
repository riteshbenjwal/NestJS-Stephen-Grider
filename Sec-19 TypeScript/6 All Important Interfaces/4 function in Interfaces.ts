interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

//2nd Way

const printSummary = (item: Reportable) => {
  console.log(item.summary());
};

printSummary(oldCivic);
