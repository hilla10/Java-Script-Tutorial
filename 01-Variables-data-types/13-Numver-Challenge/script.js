const x = Math.floor(Math.random() * 100 + 1);

const y = Math.floor(Math.random() * 50 + 1);

// Sum
const sum = `${x} + ${y} = ${x + y}`;
console.log(sum);

// Difference
const difference = `${x} - ${y} = ${x - y}`;
console.log(difference);

// Product
const product = `${x} * ${y} = ${x * y}`;
console.log(product);

// Quotient
const quotient = y !== 0 ? `${x} / ${y} = ${x / y}` : 'Division by zero';
console.log(quotient);

// Reminder
const reminder = `${x} % ${y} = ${x % y}`;
console.log(reminder);
