console.log('Hell World');

console.log(100);

console.log(20, 'Hello', true);

const x = 100;

console.log(x);

console.error('Alert');

console.warn('Warning');

console.table({ name: 'Brad', email: 'brad@gmail.com' });

console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

const style = 'padding: 10px; background-color: white; color: black';
console.log('%cHello World', style);
