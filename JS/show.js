// Default Header Function
function moreButton() {
  let hiddenLinks = document.getElementById("hiddenLinks");

  if (hiddenLinks.style.display === "none" || hiddenLinks.style.display === "") {
    hiddenLinks.style.display = "flex"; // Show the hiddenLinks
  } else {
    hiddenLinks.style.display = "none"; // Hide the hiddenLinks
  }
}

// Video Slideshow

// Clickable Scroll Function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function openApp() {
  var overlay = document.querySelector('.overlay');
  var popup = document.querySelector('.popup');

  overlay.style.display = 'block';
  popup.style.display = 'block';
}

function closePopup() {
  var overlay = document.querySelector('.overlay');
  var popup = document.querySelector('.popup');

  overlay.style.display = 'none';
  popup.style.display = 'none';
}