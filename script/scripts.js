document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const itemCount = slides.length;
  const nextItem = document.querySelector('.next');
  const previousItem = document.querySelector('.previous');
  let count = 0;

  function showNextSlide() {
    if (count < itemCount - 1) {
      count++;
    } else {
      count = 0;
    }

    updateSlider();
  }

  function showPreviousSlide() {
    if (count > 0) {
      count--;
    } else {
      count = itemCount - 1;
    }

    updateSlider();
  }

  function updateSlider() {
    const slideWidth = slides[0].clientWidth; // Ancho de cada diapositiva
    slider.style.transform = `translateX(-${count * slideWidth}px)`;
  }

  function keyPress(e) {
    e = e || window.event;

    if (e.keyCode == '37') {
      showPreviousSlide();
    } else if (e.keyCode == '39') {
      showNextSlide();
    }
  }

  nextItem.addEventListener('click', showNextSlide);
  previousItem.addEventListener('click', showPreviousSlide);
  document.addEventListener('keydown', keyPress);
});




