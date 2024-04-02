// gEt input element
const filterInput = document.getElementById('filterInput');

// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
  // get value of input
  const filterValue = document
    .getElementById('filterInput')
    .value.toUpperCase();

  // Get Names ul
  const ul = document.getElementById('names');
  // Get lis from ul
  const li = ul.querySelectorAll('li.collection-item');

  // Loop through collection item list
  li.forEach((list) => {
    const a = list.querySelector('a');

    //   If matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      list.style.display = '';
    } else {
      list.style.display = 'none';
    }
  });
}
