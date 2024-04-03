const fact = document.querySelector('#fact');
const factText = document.querySelector('#factText');
const numberInput = document.querySelector('#numberInput');
const select = document.querySelector('#select');
const factTitle = document.querySelector('#factTitle');
let selectVal;

/* function getFactAjax() {
  const number = numberInput.value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://numbersapi.com/' + number, true);

  xhr.onload = function () {
    if (this.status === 200 && number !== '') {
      factText.innerHTML = this.responseText;
      fact.style.display = 'block';
    } else {
      fact.style.display = 'none';
      factText.innerHTML = '';
    }
  };

  xhr.send();
}
 */

function getFactFetch(number) {
  fetch('http://numbersapi.com/' + number)
    .then((response) => response.text())
    .then((data) => {
      if (number !== '') {
        factText.innerHTML = data;
        fact.style.display = 'block';
        factTitle.innerText = 'Number Facts';
      } else {
        fact.style.display = 'none';
        factText.innerHTML = '';
      }
    })
    .catch((err) => console.log(err));
}

function getMathFactFetch(number) {
  fetch(`http://numbersapi.com/${number}/math`)
    .then((response) => response.text())
    .then((data) => {
      if (number !== '') {
        factText.innerHTML = data;
        fact.style.display = 'block';
        factTitle.innerText = 'Math Facts';
      } else {
        factText.innerHTML = data;
        fact.style.display = 'block';
      }
    })
    .catch((err) => console.log(err));
}

select.addEventListener('change', (e) => {
  const number = numberInput.value;
  selectVal = e.target.value;
  if (selectVal === 'Number Fact') {
    getFactFetch(number);
  } else if (selectVal === 'Math Fact') {
    getMathFactFetch(number);
  }
});

numberInput.addEventListener('input', () => {
  const number = numberInput.value;
  if (selectVal === 'Number Fact') {
    getFactFetch(number);
  } else if (selectVal === 'Math Fact') {
    getMathFactFetch(number);
  }
});
