const menuSidebar = document.querySelector(".menu-sidebar");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

menuIcon.addEventListener("click", function (e) {
  menuSidebar.style.display = "flex";
});

closeIcon.addEventListener("click", function (e) {
  menuSidebar.style.display = "none";
});
