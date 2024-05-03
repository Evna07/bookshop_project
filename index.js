const menuList = document.querySelector(".menu-list-container");
const menuItems = document.querySelectorAll(".menu-item");
const burger = document.querySelector(".burger");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

const toggleMenu = () => {
  if (menuList.classList.contains("show-menu-list")) {
    menuList.classList.remove("show-menu-list");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menuList.classList.add("show-menu-list");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
};

burger.addEventListener("click", toggleMenu);
