let x;

const name = "Hayle";
const age = 21;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template Literals

x = `Hello, my name is ${name} and I am ${age} years old`;

//String Properties and Methods

const s = new String('Hello World');

x = typeof s;

x = s.length;

// Access values by key
x = s[1];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('d');

x = s.substring(0, 5);

x = s.substring(7);
x = s.slice(-11, -5);

x = '      Hello World'

x = s.trim(-11, -5);

x = s.replace('World', 'John');

x = s.includes('Hell');

x = s.valueOf();

x = s.split(' ');
x = s.split('');

console.log(x);