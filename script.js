function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
var button = document.getElementById("top-btn");

window.onscroll = function() {
if (window.scrollY > 200) {
button.classList.add("top-btn-is-visible");
} else {
button.classList.remove("top-btn-is-visible");
}
};

button.addEventListener("click", function(event) {
event.preventDefault();
window.scrollTo({top: 0, behavior: "smooth"});
});y
