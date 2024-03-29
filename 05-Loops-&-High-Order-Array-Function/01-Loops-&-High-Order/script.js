/*  for ([initialExpression]; [conditionalExpression]; [incrementExpression]) CSSLayerStatementRule; */

/*  INITIAL EXPRESSION - Initializes a variable/counter */

/*  CONDITION EXPRESSION - Condition that the loop will continues to run as long as it is met or until the condition is false */

/*  INCREMENT EXPRESSION -Expression that will be executed after each iteration of the loop. usually increments the variables */

/*  STATEMENT - code that will be executed each time the loop is run. To execute a `black` of code, use the `{}` syntax
 */

/* for (let i = 0; i <= 10; i++) {
  if (i === 7) {
    console.log('7 is my lucky number');
  } else {
    console.log('Number ' + i);
  }
} */

// Nested Loops

/* for (let i = 1; i <= 10; i++) {
  console.log('Number ' + i);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
 */

// Loop through an array
const names = ['Brad', 'Sam', 'sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {
  names[i] === 'sara'
    ? console.log(`${names[i]} is the best`)
    : console.log(names[i]);
}
