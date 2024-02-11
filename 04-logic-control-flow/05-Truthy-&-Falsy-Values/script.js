//  Falsy Values:
// - false
//  - 0
// - "" 0r '' (Empty String)
//  - null
// - undefined
//  - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0' (' in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty arrow)
// - {} (empty object)
// - function () {} (empty function)

const x = function () {};

if (x) {
    console.log('This is truthy');
} else {
    console.log('this is Falsy');
}

console.log(Boolean(x));

//  Truthy and falsy caveats
const children = 0;

if (!isNaN(children)) {
    console.log(`You have ${children} children`);
} else {
    console.log('Please enter number of children');
}

// Checking for empty arrays

const posts = ['Post One'];
if (posts.length > 0) {
    console.log('List Posts');
} else {
    console.log("No Posts To List");
}

// Checking for empty objects

const user = {
  name: 'Brad',  
};

if (Object.keys(user).length > 0) {
    console.log('List user');
} else {
    console.log('No User');
}

//  Loose Equality (==)
console.log(false == 0);
console.log('' == 0);
console.log(null == undefined);

console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);