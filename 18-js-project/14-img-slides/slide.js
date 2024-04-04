const sliderImages = document.querySelectorAll('.slide');
const arrowRight = document.querySelector('#arrow-right');
const arrowLeft = document.querySelector('#arrow-left');
let current = 0;

// clear all images
function reset() {
  sliderImages.forEach((slide) => {
    slide.style.display = 'none';
  });
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

arrowLeft.addEventListener('click', () => {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

arrowRight.addEventListener('click', () => {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
