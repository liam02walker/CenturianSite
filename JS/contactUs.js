// Default Header Function
function moreButton() {
  var hiddenLinks = document.getElementById("hiddenLinks");

  if (hiddenLinks.style.display === "none" || hiddenLinks.style.display === "") {
    hiddenLinks.style.display = "flex"; // Show the hiddenLinks
  } else {
    hiddenLinks.style.display = "none"; // Hide the hiddenLinks
  }
}
