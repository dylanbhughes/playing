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


console.log(ancestry.filter(function(person {
  return person.father == "Carel Haverbeke";
})));

var overNinety = ancestry.filter(function(person) {
  return person.died - person.born > 90;
});

console.log(overNinety.map(function(person){
  return person.name;
}));


// Reduce











//
