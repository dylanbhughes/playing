// Eloquent JavaScript Chapter 4 Problem 2: Reverse an Array

// My Solution

function reverseArray(array) {
  var newArray = [];
  for (var i = array.length-1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  for (var i = 1; i < array.length; i++) {
    var item = array.splice(i,1);
    array.unshift(item[0]);
  }
}

// Book Solution

function reverseArray(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
  return output;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
