let x;

const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
    firstName,
    lastName,
    age,
};



x = person.age;
x = person.firstName;
x = person.lastName;

console.log(x);

// Destructuring


const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'John',
    }
};

const {
    id: todoId,
    title,
    user: {
        name
    }
} = todo;

console.log(todoId);

// Destructure arrays

const numbers = [23, 33, 67, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);