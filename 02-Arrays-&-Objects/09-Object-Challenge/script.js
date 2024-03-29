const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Issacson',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'MockingJay',
    author: 'Suzanne Collins',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// Challenge 2

library.forEach((book) => {
  book.status.read = true;
});

console.log(library);

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

// Challenge 2

const { title: firstBook } = library[0];

console.log(firstBook);

// Challenge 4

const str = JSON.stringify(library);
console.log(str)