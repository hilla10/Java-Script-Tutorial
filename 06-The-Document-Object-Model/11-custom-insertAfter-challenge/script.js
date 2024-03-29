function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

// New element to insert]
const li = document.createElement('li');
li.textContent = 'Insert Me After!';

// Existing element to insert after]
const item = document.querySelector('li:first-Child');
// Our custom function]

insertAfter(li, item);
