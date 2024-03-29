const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
  console.log(e.key);
};

const onKeyUP = (e) => {
  console.log(e.key);
  console.log('key up');
};

const onKeyDown = (e) => {
  // Key
  // if (e.key === 'Enter') {
  //   alert('You pressed enter');
  // }

  // keyCode
  if (e.keyCode === 13) {
    alert('You pressed enter');
  }
  // Code
  if (e.code === 'Digit1') {
    console.log('You pressed 1');
  }

  if (e.repeat) {
    console.log('You are holding down ' + e.key);
  }

  console.log('Shift: ' + e.shiftKey);
  console.log('Control: ' + e.ctrlKey);
  console.log('Alt: ' + e.altKey);

  if (e.shiftKey && e.key === 'K') {
    console.log('You hit shift + K');
  }
};

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUP);
itemInput.addEventListener('keydown', onKeyDown);
