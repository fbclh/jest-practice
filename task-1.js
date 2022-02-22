function stringLength(string) {
  if (string.length < 1 || string.length > 10) {
    throw Error('String must be between 1 and 10 characters long');
  } else return string.length;
}

module.exports = stringLength;

// console.log(stringLength('banana'));
// console.log(stringLength(''));
// console.log(stringLength('bananaBanana'));
