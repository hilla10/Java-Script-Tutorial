// Loop Through arrays

const items = ['book', 'table', 'chair', 'kite'];
const users = [{ name: 'brad' }, { name: 'kate' }, { name: 'Steve' }];

/* for (let item of items) {
  console.log(item);
}
 */

for (const user of users) {
  console.log(user);
}

// Loop over String

const str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}

// Loop over Maps

const map = new Map([
  ['name', 'John'],
  ['age', 30],
]);

console.log(map);

for (const [key, value] of map) {
  console.log(key, value);
}
