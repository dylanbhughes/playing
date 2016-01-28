// Code from Chapter 5 of Eloquent JavaScript (Trying to Understand Closures Here)

function forEach(array, action) {
  for (var i = 0; i < array.length; i++){
    action(array[i]);
  }
}

function firstLetter(str) {
  //log the first letter of a string
  console.log(str[0]);
}

forEach(["Wampeter", "Foma", "Granfalloon"], firstLetter);

var numbers = [1,2,3,4,5], sum = 0;
forEach(numbers, function(number) {
  sum += number;
});
console.log(sum);


function greaterThan(n) {
  return function(m) {return m > n; };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

//functions that change other functions

function noisy(f) {
  return function(arg) {
    console.log("calling with", arg);
    var val = f(arg);
    console.log("called with", arg, "- got", val);
    return val;
  };
}
noisy(Boolean)(0);

function unless(test, then) {
  if (!test) then();
}

function repeat(times, body) {
  for (var i = 0; i < times; i++) body(i);
}

repeat(3, function(n) {
  unless(n % 2, function() {
    console.log(n, "is even");
  });
});


var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(ancestry.length);

function filter(array, test) {
  var passed = [];
  for (var i = 0; i <array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

console.log(filter(ancestry, function (person) {
  return person.born > 1900 && person.born < 1925;
}));


console.log(ancestry.filter(function(person) {
  return person.father == "Carel Haverbeke";
}));

var overNinety = ancestry.filter(function(person) {
  return person.died - person.born > 90;
});

console.log(overNinety.map(function(person){
  return person.name;
}));


// Reduce

function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
  return current;
}

console.log(reduce([1,2,3,4,5], function(a,b){
  return a + b;
}, 0));

console.log(ancestry.reduce(function(min, cur) {
  if(cur.born < min.born) return cur;
  else return min;
}));

console.log(ancestry.filter(function(person) {
  if(person.sex === "m" && person.born >= 1900)
    return person;
  })
    .map(function(person){
      return person.name;
}));

// Compose

function average(array) {
  function plus(a, b) { return a + b;}
  return array.reduce(plus) / array.length;
}
function age(p) { return p.died - p.born; }
function male(p) { return p.sex == "m"; }
function female(p) { return p.sex == "f"; }

console.log(average(ancestry.filter(male).map(age)));
console.log(average(ancestry.filter(female).map(age)));



// Shared DNA Probelem

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

console.log(byName["Philibert Haverbeke"]);

function reduceAncestors(person, f, defaultValue) {
  function valueFor(person) {
    if (person == null)
      return defaultValue;
    else
      return f(person, valueFor(byName[person.mother]),
                       valueFor(byName[person.father]));
  }
  return valueFor(person);
}

function sharedDNA(person, fromMother, fromFather) {
  if (person.name == "Pauwels van Haverbeke")
    return 1;
  else
    return (fromMother + fromFather) / 2;
}

var ph = byName["Philibert Haverbeke"];
console.log(reduceAncestors(ph, sharedDNA, 0) / 4);



// Bind
//"The bind method, which all functions have, creates a new function that will call the original function but with some of the arguments already fixed."

var theSet = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"];

function isInSet(set, person) {
  return set.indexOf(person.name) > -1;
}

console.log(ancestry.filter(function(person) {
  return isInSet(theSet, person);
}));

console.log(ancestry.filter(isInSet.bind(null, theSet)));



















//
