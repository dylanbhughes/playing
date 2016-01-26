// Eloquent JavaScript Chapter 2 Problem 2

// My original solution

for (var i = 1; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log('FizzBuzz')
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
};

// Closer to book solution (I don't like assigning unnecessary temporary variables, leftover habit from CSC-100 @ American U)

for (var i = 1; i <= 100; i++) {
  var output = "";
  if (i % 3 === 0)
    output += 'Fizz';
  if (i % 5 === 0)
    output += 'Buzz';
  console.log(output || i);
};
