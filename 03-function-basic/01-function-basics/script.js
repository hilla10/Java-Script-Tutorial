function sayHello() {
  console.log('hello world');
}

sayHello();

function add(num1, num2) {
  console.log(num1 + num2);
}

add(30, 5);

function subtract(num1, num2) {
  return num1 - num2;

  console.log('After the return');
}

const result = subtract(10, 2);

console.log(result, subtract(20, 5));
