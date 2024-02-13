let output;

// Get Child elements

const parent = document.querySelector('.parent');

output = parent.children;

output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// Get parent elements from a child

const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border = "2px solid #ccc";
child.parentElement.style.padding = "15px";

// sibling Elements

const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;

output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = "#43d023";
secondItem.previousElementSibling.style.color = "#2a8fac";

console.log(output);