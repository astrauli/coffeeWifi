document.addEventListener("DOMContentLoaded", () => {
  let slides = document.querySelectorAll('#slides .slide');
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide,3000);

  function nextSlide() {
      slides[currentSlide].className = 'slide';
      currentSlide = (currentSlide+1)%slides.length;
      slides[currentSlide].className = 'slide showing';
  }

  if (window.screen.width <= 480) {
    let menuList = document.getElementsByClassName("menu-list")[0];
    let hamburger = document.getElementsByClassName("menu-list-container")[0];
    let originalClasses = menuList.className;
    hamburger.addEventListener('click', () => {
      if (menuList.className.includes("hidden")) {
        menuList.className = originalClasses;
      } else {
        menuList.className += " hidden"        
      }
    })
  }

});
