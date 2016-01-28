// Eloquent JavaScript Chapter 4 Problem 1: Sum of a Range

// My Code

function range(start, end, step) {
  var result = [];
  if (!step) step = 1;
  if (step>0){
    for (var i = start; i <= end; i+=step){
      result.push(i);
    }
  } else {
    for (var i = start; i >= end; i+=step){
      result.push(i);
    }
  }
  return result;
}

function sum(numbers) {
  var result = 0;
  for (var i = 0; i<numbers.length; i++) {
    result+= numbers[i];
  }
  return result;
}

// Book Answer

function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}
