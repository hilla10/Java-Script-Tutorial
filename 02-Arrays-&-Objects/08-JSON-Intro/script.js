const post = {
    id: 1,
    title: 'post One',
    body: 'This is the body',
};

// Convert to JSON string

const str = JSON.stringify(post);

console.log(str.id); // if you want to get the post id you have to parse JSON file

//  Parse JSON 

const obj = JSON.parse(str);

console.log(obj.id);

const posts = [
    {
        id: 1,
        title: 'post One',
        body: 'This is the body',

    },

     {
         id: 2,
         title: 'post Two',
         body: 'This is the body',

     },
];

const str2 = JSON.stringify(posts)

console.log(str2);