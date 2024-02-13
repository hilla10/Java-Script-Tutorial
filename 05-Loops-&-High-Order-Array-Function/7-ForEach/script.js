const social = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// console.log(social.__proto__);

// social.forEach(function (item) {
//     console.log(item);
// });

// social.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));


function logSocials(social) {
    console.log(social);
}

social.forEach(logSocials);

const socialObjs = [
    {name: 'Twitter', url: 'https://twitter.com'},
    {name: 'Facebook', url: 'https://facebook.com'},
    {name: 'Linkedin', url: 'https://linkedin.com'},
    {name: 'Instagram', url: 'https://Instagram.com'},
];

socialObjs.forEach((item) => console.log(item.url));