let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, 'Hello', true, null];

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[0]}`;

x = numbers.length;

x = fruits[1] = 'pear';

// fruits.length = 2;

fruits[3] = 'strawberry';

fruits[fruits.length] = 'blueberry';

x = fruits;

console.log(x);
