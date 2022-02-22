//* Task 2

/*
 # Write a function reverseString(string) function. It should take a string as an argument and return it reversed.
 # Write at least one test for this function.
*/

function reverseString(string) {
  return string.split('').reverse().join('');
}

module.exports = reverseString;

// console.log(reverseString('spinach'));
// console.log(reverseString('kale'));
