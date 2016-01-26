// Eloquent JavaScript Chapter 3 Problem 1: Min function

function min(x, y){
  if(x<y)
    return x;
  return y;
};

console.log(min(2, 3));
console.log(min(238, 97));

// Book Version (I think mine is better because it's more efficient. The book probably thinks its is more elegant)

function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
};
