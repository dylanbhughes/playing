// Eloquent JavaScript Chapter 2 Problem 3

// Cheeky Version

var output = "";
for (var i = 0; i < 4; i++){
  output += " # # # #\n# # # # \n";
};
console.log(output);

// Less Cheeky Version

var size = 8;
var output = "";
for (var y = 0; y < size; y++){
  for (var x = 0; x < size; x++){
    if ((x + y) % 2 == 0){
      output += " ";
    } else {
      output += "#";
    }
  };
  output += "\n";
};

console.log(output);
