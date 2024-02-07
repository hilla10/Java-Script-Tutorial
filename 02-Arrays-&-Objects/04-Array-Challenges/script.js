let x;

const arr = [1, 2, 3, 4, 5];

// Results [6, 5, 4, 3, 2, 1, 0]


// x = arr.pop(0);

// x = arr.unshift(0);
// x = arr.push(6);
// x = arr.reverse();

x = arr.reverse();
x = arr.push(0);
x = arr.unshift(6);

console.log(x, arr);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Solution 1
const arr3 = arr1.slice(0, 4).concat(arr2);
console.log(arr3);

// Solution 2
const arr4 = [...arr1, ...arr2];

arr4.splice(4,1);

console.log(arr4);



