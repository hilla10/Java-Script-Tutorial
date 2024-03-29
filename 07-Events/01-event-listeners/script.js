const clearBtn = document.querySelector('#clear');

const clearItem = () => {
  const itemList = document.querySelector('ul');
  const items = document.querySelectorAll('li');

  // items.forEach((item) => item.remove());

  // items.forEach((list) => {
  //   itemList.removeChild(list);
  // });

  // itemList.innerHTML = '';

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
};

clearBtn.addEventListener('click', clearItem);

function onClear() {
  alert('clear Item');
}

// JavaScript Event Listener

/* clearBtn.onclick = function () {
  alert('clear items');
};
 */

// AddEventListener
/* 
clearBtn.addEventListener('click', () => alert('Clear Items')); */

// clearBtn.addEventListener('click', () => console.log('Clear Items'));

// setTimeout(() => clearBtn.addEventListener('click', onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);
