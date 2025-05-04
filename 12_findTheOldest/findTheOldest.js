/**
 *
 * @param {Array} peopleArr
 */
const findTheOldest = function (peopleArr) {
  const currentYear = new Date().getFullYear();
  const age = (dob, dod = currentYear) => dod - dob;

  peopleArr.forEach((person) => {
    if (person.yearOfDeath === undefined) {
      person.yearOfDeath = currentYear;
    }
  });

  peopleArr.sort(
    (a, b) =>
      age(a.yearOfBirth, a.yearOfDeath) - age(b.yearOfBirth, b.yearOfDeath)
  );

  return peopleArr.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
