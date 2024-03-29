// Calculator Challenge

/* const calculator = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    case '/':
      return num1 / num2;
      default:
          return 'Invalid Operator'
    }
}; */

const calculator = (num1, num2, operator) => {
  if (operator === '+') return num1 + num2;
  if (operator === '-') return num1 - num2;
  if (operator === '*') return num1 * num2;
  if (operator === '/') return num1 / num2;
  else return 'Invalid Operator';
};

console.log(calculator(10, 10, '*'));
