// Challenge 1

// Regular Function

/* function getCelsius(F) {
  return ((F - 32) * 5) / 9;
}
console.log(`The temperature is ${getCelsius(41)} \xB0C`);
 */

// Arrow Function
const getCelsius = (F) => ((F - 32) * 5) / 9;
console.log(`The temperature is ${getCelsius(41)} \xB0C`);

// Challenge 2

const minMax = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    min,
    max,
  };
};

console.log(minMax([1, 2, 3, 4, 60, 5]));

// Challenge 3

((w, l) => {
  area = w * l;
  const output = `The area of a rectangle with a length of ${w} and a width of ${l} is ${area}`;

  console.log(output);
})(10, 5);
