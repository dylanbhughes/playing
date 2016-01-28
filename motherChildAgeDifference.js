// Eloquent JavaScript Chapter 5 Problem 2: Mother-child Age Difference

// Book Provided Function
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.

var ageGap = ancestry.filter(function(person) {
  return byName[person.mother] != null;
    }).map(function (person) {
      return person.born - byName[person.mother].born;
});

console.log(average(ageGap));

// → 31.2
