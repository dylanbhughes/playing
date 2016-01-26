// Eloquent JavaScript Chapter 3 Problem 3: Bean Counting'

// My Solution
function countChar(s, character) {
  counter = 0;
  for (var i = 0; i < s.length; i++){
    if (s.charAt(i) === character)
      counter++;
  }
  return counter;
}

function countBs(s) {
  return countChar(s, "B");
}

// Book Solution

function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted += 1;
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}
