// View My Work button - scroll to projects section
let viewWorkButton = document.getElementById("viewWorkButton");
viewWorkButton.onclick = function() {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
};

// Contact Me button - scroll to contact section
let contactButton = document.getElementById("contactButton");
contactButton.onclick = function() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
};

// Scroll to top button - show when scrolled down
let scrollTopButton = document.getElementById("scrollTopButton");

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
};

// Scroll to top button - click to go back to top
scrollTopButton.onclick = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
};