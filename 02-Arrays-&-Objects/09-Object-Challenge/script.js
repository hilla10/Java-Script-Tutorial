const library = [{
        title: 'Code',
        author: 'John',
        status: {
            own: true,
            reading: true,
            read: false,
        }
    },

    {
        title: 'Code1',
        author: 'John',
        status: {
            own: true,
            reading: true,
            read: false,
        }
    },

    {
        title: 'Code2',
        author: 'John',
        status: {
            own: true,
            reading: true,
            read: false,
        }
    },

]


library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const {title: firstBook} = library[0];

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);