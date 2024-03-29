/* for (let i = 1; i <= 100; i++) {
  i % 3 === 0 && i % 5 === 0
    ? console.log('FizzBuzz ' + i)
    : i % 3 === 0
    ? console.log('Fizz ' + i)
    : i % 5 === 0
    ? console.log('Buzz ' + i)
    : '';
} */

let i = 1;
/* while (i <= 100) {
  i % 3 === 0 && i % 5 === 0
    ? console.log('FizzBuzz ' + i)
    : i % 3 === 0
    ? console.log('Fizz ' + i)
    : i % 5 === 0
    ? console.log('Buzz ' + i)
    : '';
  i++;
} */

/* do {
  i % 3 === 0 && i % 5 === 0
    ? console.log('FizzBuzz ' + i)
    : i % 3 === 0
    ? console.log('Fizz ' + i)
    : i % 5 === 0
    ? console.log('Buzz ' + i)
    : '';
  i++;
} while (i <= 100);
 */

for (let i = 1; i <= 100; i++) {
  let output = '';
  if (i % 3 === 0) output += 'Fizz';
  if (i % 5 === 0) output += 'Buzz';
  console.log(output || i);
}
