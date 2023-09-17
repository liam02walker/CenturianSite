// Default Header Function
function moreButton() {
  let hiddenLinks = document.getElementById("hiddenLinks");

  if (hiddenLinks.style.display === "none" || hiddenLinks.style.display === "") {
    hiddenLinks.style.display = "flex"; // Show the hiddenLinks
  } else {
    hiddenLinks.style.display = "none"; // Hide the hiddenLinks
  }
}

// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
let timer;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "flex";
    } else {
      slide.style.display = "none";
    }
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
  resetTimer();
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(nextSlide, 3000);
}

function startSlideShow() {
  showSlide(currentSlide);
  timer = setInterval(nextSlide, 3000);
}

window.addEventListener("load", startSlideShow);

// Clickable Scroll Function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
