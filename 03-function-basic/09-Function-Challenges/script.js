// Challenge 1

// function getCelsius(f) {
//     const celsius = ((f - 32) * 5) / 9;
//     return celsius;
// }

const getCelsius = (f) => ((f - 32) * 5) / 9;


console.log(`The temp is ${getCelsius(32)} \xB0C `);

// Challenge 2
function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    console.log(max);

    return {
        min,
        max
    }
}

console.log(minMax([1, 2, 3, 4, 5, 6, 30]));

// Challenge 3

((length, width) => {
    const area = length * width;

    const output = `The area of a rectangle with a lenght of ${length} and a width of ${width} is ${area}.`;

    console.log(output);
} )(10, 5);