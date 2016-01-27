// Eloquent JavaScript Chapter 4 Problem 3: A List

function arrayToList(array) {
  var list = null;
  for (var i = array.length-1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function listToArray(list, counter) {
  var array = [];
  for (var element = list; element; element = list.rest)
    array.push(element.value);
  return array;
}

function prepend(element, inputList) {
  return {
    value: element,
    rest: inputList
  };
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n === 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}
