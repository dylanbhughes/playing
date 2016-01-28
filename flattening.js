// Eloquent JavaScript Chapter 5 Problem 1: Flattening

var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(a, b) {
  return a.concat(b);
}));
