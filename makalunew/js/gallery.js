let slideIndex = 1;

function showSlide(n) {
  const slides = document.querySelectorAll('.makalu_gallery img');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  const offset = (slideIndex - 1) * -100;
  document.querySelector('.makalu_gallery').style.transform = `translateX(${offset}%)`;
}

function changeSlide(n) {
  showSlide(slideIndex += n);
}

setInterval(() => {
  changeSlide(1);
}, 3000); // Change slide every 3 seconds (adjust the time interval as desired)

showSlide(slideIndex);
