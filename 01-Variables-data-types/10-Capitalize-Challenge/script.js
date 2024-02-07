const anyString = 'developers';

myString = anyString;

// Solution One
myString  = myString.charAt(0).toUpperCase() + myString.substring(1);
// Solution Two
myString  = myString[0].toUpperCase() + myString.substring(1);

// Solution Three
myString  = `${myString[0].toUpperCase()}${myString.slice(1)}`;


console.log(myString);