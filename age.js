function getBirthDate() {
  const givenDate = prompt("Enter date of birth, format: YYYY-MM-DD");
  const parsedGivenDate = Date.parse(givenDate);
  return parsedGivenDate;
}

function calculateAge() {
  const birthDate = getBirthDate();
  const currentDate = Date.now();
  const ageMilliseconds = currentDate - birthDate;
  const ageYears = Math.floor(ageMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
  return ageYears;
}

console.log(calculateAge());
