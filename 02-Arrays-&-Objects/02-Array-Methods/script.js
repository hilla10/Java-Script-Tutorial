let x;

const arr = [34, 20, 55, 10, 16];

// arr.push(100);

// arr.pop();

// arr.unshift(10);

// arr.shift();

// arr.reverse();

x = arr.includes(10);

x = arr.indexOf(10);

x = arr.slice(1, 4);

// x = arr.splice(1, 4);

// x = arr.splice(1, 1);

x = arr.splice(1, 4).reverse().toString().charAt(4);

console.log(x);