let x;

// Array Literal
const numbers = [12, 5, 6, 70, 20, 10];
const mixed = [1, 'Hello', true, null];

// Array Constructor

const fruits = new Array('apple', 'grape', 'orange');

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[0]}`

x = numbers.length;

fruits[2] = 'Pear';

// fruits.length = 2;

fruits[3] = "strawberry";

fruits[fruits.length] = "blueberry";
fruits[fruits.length] = "peach";

x = fruits;

console.log(x);