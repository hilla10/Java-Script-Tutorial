const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

// div.innerText = "Hello World";

const text = document.createTextNode('Hello World');
div.appendChild(text);

// document.body.appendChild(div);

const li  = document.createElement('li');

const text1 = document.createTextNode('Water');
li.appendChild(text);

document.querySelector('ul').appendChild(li);

const i = document.createElement('i');
i.className = "fa-solid fa-xmark";

const mark = document.querySelector('li:last-child');
mark.appendChild(i);

i.style.color = "red";

console.log(i);