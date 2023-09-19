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
