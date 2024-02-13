const age = 19;

// Using an if statement
if (age >= 18) {
    console.log('You can Vote!');
} else {
    console.log(('You can not Vote'));
}

// Using an Ternary Operator

age >= 18 ? console.log('You can Vote!') : console.log('You can not Vote');

//  Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote!' : 'You can not vote';

console.log(canVote);
console.log(canVote2);

// Multiple statement

const auth = true;
// let redirect;

// if(auth) {
//     alert('Welcome to the dashboard');
//     redirect = '/dashboard'
// } else {
//     alert('Access Denied');
//     redirect = '/login'
// }

// const redirect = auth ? (alert('Welcome to the dashboard'), '/dashboard') : (alert('Access Denied'), '/login')

// console.log(redirect);

// auth ? console.log('Welcome to the dashboard') : null;

auth && console.log('Welcome to the dashboard');