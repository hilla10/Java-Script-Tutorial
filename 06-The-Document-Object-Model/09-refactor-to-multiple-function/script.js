const items = document.querySelector('.items');

function createNewItems(item) {
  const li = document.createElement('li');
  li.className = 'item';

    items.appendChild(li);
    
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');

  li.appendChild(button);
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;

  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);

  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

createNewItems('Cheese');
createNewItems('Sauce');
