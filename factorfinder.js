#!/usr/local/bin/node
// process.argv[2] is the starting index for additional arguments in cmd line

// stopNums array will contain all past run factors and stop recursive
// function when a repeat factor pair is found
var stopNums = [];

if (!process.argv[2]) {
  console.log("Proper way to use this program:");
  console.log("#######################");
  console.log("node factorfinder.js *number*");
};

if (process.argv[2]){
  // convert arg to a number since it's initialized as a string
  var number = Number(process.argv[2]);
  // number % 1 makes sure that our number is a whole number
  if ((number % 1) !== 0){
    console.log("Converted argument " + process.argv[2] + " is not a whole number!");
    return false;
  }
  factorFinder(number);
  if (stopNums[0] === undefined) console.log(number + " is a prime number!");
}




function factorFinder(number){

  for (var i = 2; i < number; ++i){
    var divNum = number / i;
    if (divNum % 1 == 0){
      if (stopNums.indexOf(i) !== -1)
        return false;
      console.log("Answer is: " + divNum + " and " + i);
      stopNums.push(divNum);
    }
  }
}
