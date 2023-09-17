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
const slideshows = {
  littleLeague: {
    currentSlide: 0,
    slides: document.querySelectorAll("#littleLeague .slide"),
    prevButton: document.getElementById("littleLeaguePrevButton"),
    nextButton: document.getElementById("littleLeagueNextButton"),
    timer: null,
  },
  bigLeague: {
    currentSlide: 0,
    slides: document.querySelectorAll("#bigLeague .slide"),
    prevButton: document.getElementById("bigLeaguePrevButton"),
    nextButton: document.getElementById("bigLeagueNextButton"),
    timer: null,
  },
  adultABC: {
    currentSlide: 0,
    slides: document.querySelectorAll("#adultABC .slide"),
    prevButton: document.getElementById("adultABCPrevButton"),
    nextButton: document.getElementById("adultABCNextButton"),
    timer: null,
  },
};

function showSlide(sectionId, index) {
  const slideshow = slideshows[sectionId];
  const slides = slideshow.slides;

  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "flex";
    } else {
      slide.style.display = "none";
    }
  });
}

function nextSlide(sectionId) {
  const slideshow = slideshows[sectionId];
  slideshow.currentSlide++;
  if (slideshow.currentSlide >= slideshow.slides.length) {
    slideshow.currentSlide = 0;
  }
  showSlide(sectionId, slideshow.currentSlide);
  resetTimer(sectionId);
}

function prevSlide(sectionId) {
  const slideshow = slideshows[sectionId];
  slideshow.currentSlide--;
  if (slideshow.currentSlide < 0) {
    slideshow.currentSlide = slideshow.slides.length - 1;
  }
  showSlide(sectionId, slideshow.currentSlide);
  resetTimer(sectionId);
}

function resetTimer(sectionId) {
  const slideshow = slideshows[sectionId];
  clearInterval(slideshow.timer);
  slideshow.timer = setInterval(() => nextSlide(sectionId), 3000);
}

function startSlideShow(sectionId) {
  showSlide(sectionId, slideshows[sectionId].currentSlide);
  slideshows[sectionId].timer = setInterval(() => nextSlide(sectionId), 3000);
}

window.addEventListener("load", () => {
  startSlideShow("littleLeague");
  startSlideShow("bigLeague");
  startSlideShow("adultABC");
});

// Clickable Scroll Function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
