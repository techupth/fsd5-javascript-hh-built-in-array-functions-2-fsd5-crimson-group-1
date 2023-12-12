let crimeRecordNames = [
  "Theodora Milenko",
  "Tinashe Benigno",
  "Mahalia Priyanka",
  "Maisy Sudhir",
];

let searchCrimeRecord = (name) => {
  if (crimeRecordNames.includes(name)) {
    return `${name} has crime record !!!`;
  } else {
    return `${name} has has no crime record`;
  }
};

console.log(searchCrimeRecord("Dilan Sandra")); //"Dilan Sandra has no crime record"

console.log(searchCrimeRecord("Tinashe Benigno")); //"Tinashe Benigno has crime record !!!"
