const myString = 'developer';

let cap;

// Solution 1:
cap = myString.charAt(0).toUpperCase() + myString.slice(1);
// Solution 2
cap = myString[0].toUpperCase() + myString.substring(1);
// Solution 2
cap = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(cap);

const str = 'hello world this is uppercase';

const words = str
  .split(' ')
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(' ');

console.log(words);
