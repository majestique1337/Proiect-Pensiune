document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const hiddenMenu = document.querySelector(".hidden-menu");
    const middleItems = document.querySelector(".middle-items");
    const button48 = document.querySelector(".button-48");
    const mainContent = document.querySelector("main");
  
    burgerMenu.addEventListener("click", () => {
      // Toggle hidden menu
      hiddenMenu.classList.toggle("show");
  
      // Toggle middle items and button
      middleItems.classList.toggle("hidden-menu");
      button48.classList.toggle("hidden-menu");
  
      // Animate burger menu icon
      const lines = document.querySelectorAll(".burger-line");
      lines[0].classList.toggle("rotate-down");
      lines[1].classList.toggle("hide-line");
      lines[2].classList.toggle("rotate-up");
  
      // Hide main content
      mainContent.classList.toggle("hide-main");
    });
  });
  