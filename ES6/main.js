'use strict'

// var a = 'test1';
// let b = 'test2';


/* function testVar() {
    var a = 30;
    if (true) {
        var a = 50;
        console.log(a);
    }

    console.log(a);
}

// testVar();

function testLet() {
    let a = 30;
    if (true) {
        let a = 50;
        console.log(a);
    }

    console.log(a);
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log(i);

testLet(); */

/* const colors = [];

colors.push('red');
colors.push('blue');
colors.push('Green');

colors = 'Yellow';

console.log(colors); */

// ----------------Class & inheritance----------------

class User {
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;

    }

    static countUsers() {
        console.log('There are 50 users');
    }

    register() {
        console.log(`${this.userName} is now registered`);
    }
}

// let bob = new User('Bob', 'bob@gmail.com', 'pass1234');
// console.log(bob);
// bob.register();

// User.countUsers();

/* class Member extends User {
    constructor(userName, email, password, memberPackage) {
        super(userName, email, password);
        this.package = memberPackage;
    }

    getPackage() {
        console.log(`${this.userName} is subscribed to the ${this.package} package`);
    }
}

let mike = new Member('Mike', 'mike@gmail.com', '12345', 'Standard');
// mike.getPackage();

mike.register(); */

// -------------Template literals-------------

/* let name = 'John';

function makeUpperCase(word) {
    return word.toUpperCase();
}

let template = `<h1>${makeUpperCase('Hello')}, ${name}</h1>  <p> This is a simple template in JavaScript </p>`;

document.getElementById('template').innerHTML = template; */

// -------------------String Method-------------------

let theString = 'Hello, my name is Hayla and I love JavaScript';

// StartsWith();
// endWith();
// Includes():

// console.log(theString.startsWith('name', 10));
// console.log(theString.endsWith('t'));
// console.log(theString.includes('loves'));

// -------------------Number Method-------------------

// Hex
// console.log(0xFF);
// Binary
// console.log(0b101011);
// Octal
// console.log(0o543);

// console.log(Number.isFinite(NaN));
// console.log(Number.isNaN(NaN));
// console.log(Number.isInteger(-3.7));

// ------------Default parameter------------

/* function greet($greeting = 'Hello world') {
    console.log($greeting);
}

greet(); */

// ------------spreed Operator------------

/* let args1 = [1, 2, 3];
let args2 = [4, 5, 6];

function test() {
    console.log(args1 + ', ' + args2);
}

test.apply(null, args1);
test(...args1, ...args2); */

// Set & Map

// ------------Set------------
/* let myArray = [11, 22, 34, 5, 6, 56];
let mySet = new Set(myArray);

mySet.add('10');
mySet.add({
    a: 1,
    b: 2
});
mySet.delete(22);
// mySet.clear();

console.log(mySet);
console.log(mySet.size);

mySet.forEach((val) => {
    console.log(val);
});
 */
// ------------------Map------------------

/* let myMap = new Map([
    ['a1', 'Hello'],
    ['b2', 'Goodby']
]);

myMap.set('c3', 'Foo');
myMap.delete('a1');
console.log(myMap);
console.log(myMap.size); */

/* let carWeakSet = new WeakSet();

let car1 = {
    make: 'Hondo',
    model: 'Civic'
}

carWeakSet.add(car1);

console.log(carWeakSet);

let car2 = {
    make: 'Toyota',
    model: 'Camry'
}

carWeakSet.delete(car1)
carWeakSet.add(car2); */

/* let carWeakMap = new WeakMap();

let key1 = {
    id: 1
}

let car1 = {
    make: 'Hondo',
    model: 'Civic'
}

let key2 = {
    id: 2
}

let car2 = {
    make: 'Toyota',
    model: 'Camry'
}

carWeakMap.set(key1, car1);
carWeakMap.set(key2, car2);

carWeakMap.delete(key2)

console.log(carWeakMap); */

// Arrow Function

/* function preFixer(prefix) {
    this.prefix = prefix;
}

preFixer.prototype.preFixerArray = function (arr) {
    return arr.map((x) => {
        console.log(this.prefix + x);
    });
};

let pre = new preFixer('Hello ');
pre.preFixerArray(['Brad', 'Jeff']); */

/* let add = (a, b) => {
    let sum = a + b;
    console.log(sum);
    return false;
}

add(10, 50); */


//------------------Promises-----------------

/* let myPromise = Promise.resolve('Foo');

myPromise.then((res) => {
    console.log(res);
}); */

/* let myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(4), 2000);

});

myPromise.then((res) => {
    res += 3
    console.log(res);
}); */

/* function getData(method, url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response)
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
};

getData('GET', 'https://jsonplaceholder.typicode.com/todos/').then(function (data) {
    let todos = JSON.parse(data);
    let output = '';
    for (let todo of todos) {
        output += `
        <li>
            <h3>${todo.title}</h3>
            <p>Completed: ${todo.completed}</p>
        </li>
        `;
    }
    document.getElementById('template').innerHTML = output;
}).catch(function (err) {
    console.log(err);
}); */

// -----------------Generators-----------------

function* gen1() {
    console.log('Hello');
    yield 'Yield 1 Ran...';
    console.log('World');
    yield 'Yield 2 Ran...';
    return 'Returned...';
}

let g = gen1();

/* console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value); */

for (let val of g) {
    console.log(val);
}