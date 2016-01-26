// Eloquent JavaScript Chapter 3 Problem 2: Recursion

// My answer

function even(n) {
  if (n < 0)
    return even(-n)
  if (n === 0)
    return true;
  if (n === 1)
    return false;
  return even(n-2);
};

// Book Answer

function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}
