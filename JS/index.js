//Image Slideshow
let slideIndex = 0;
let timer;

function showSlide(n) {
  const slides = document.querySelectorAll(`.slideshow`);
  const imageCircles = document.querySelectorAll(`.image-circle`);

  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    imageCircles[i].classList.remove("active");
  }
  slides[slideIndex].style.display = "block";
  imageCircles[slideIndex].classList.add("active");
  clearTimeout(timer);
  timer = setTimeout(() => nextImage(), 3000);
}
function nextImage() {
  slideIndex++;
  showSlide(slideIndex);
}
function previousImage() {
  slideIndex--;
  showSlide(slideIndex);
}

//Scrolling Function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}
