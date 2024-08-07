// Add some interactivity to the website

function changeTheme() {
  let element = document.body;
  let dark = element.classList.toggle("dark-mode");

  let logo = document.getElementsByClassName("logo");
  let darkImg = document.getElementsByClassName("dark");
  let lightImg = document.getElementsByClassName("light");
  let menuButton = document.getElementsByClassName("menu")[0];
  let menuIcon = document.getElementsByClassName("img-menu")[0];

  if (logo && darkImg && lightImg && menuButton && menuIcon) {
    if (dark) {
      logo[0].setAttribute("src", "./images/alarado-icon-homepage-dark.svg");
      logo[1].setAttribute("src", "./images/alarado-icon-homepage-dark.svg");

      darkImg[0].setAttribute("src", "./images/Moon_fill.svg");
      darkImg[0].style.background = "#f2f9fe";
      darkImg[1].setAttribute("src", "./images/Moon_fill.svg");
      darkImg[1].style.background = "#f2f9fe";

      lightImg[0].setAttribute("src", "./images/Sun_fill_light.svg");
      lightImg[0].style.background = "#223344";
      lightImg[1].setAttribute("src", "./images/Sun_fill_light.svg");
      lightImg[1].style.background = "#223344";

      menuButton.style.background = "#111729";
      menuIcon.setAttribute("src", "./images/menu-svgrepo-com-light.svg");
    } else {
      logo[0].setAttribute("src", "./images/alarado-icon-homepage.svg");
      logo[1].setAttribute("src", "./images/alarado-icon-homepage.svg");
      darkImg[0].setAttribute("src", "./images/Moon_fill_light.svg");
      darkImg[0].style.background = "#223344";
      darkImg[1].setAttribute("src", "./images/Moon_fill_light.svg");
      darkImg[1].style.background = "#223344";
      lightImg[0].setAttribute("src", "./images/Sun_fill.svg");
      lightImg[0].style.background = "#f2f9fe";
      lightImg[1].setAttribute("src", "./images/Sun_fill.svg");
      lightImg[1].style.background = "#f2f9fe";

      menuButton.style.background = "#f2f9fe";
      menuIcon.setAttribute("src", "./images/menu-svgrepo-com.svg");
    }
  }
}

function openMobileMenu() {
  let menuButton = document.getElementsByClassName("menu")[0];

  let mobileMenu = document.getElementsByClassName("mobile-menu")[0];
  if (menuButton) {
    menuButton.style.display = "none";
  }

  if (mobileMenu) {
    mobileMenu.style.display = "flex";
    mobileMenu.style.flexDirection = "column";
  }
}

function closeMobileMenu() {
  let menuButton = document.getElementsByClassName("menu")[0];
  let mobileMenu = document.getElementsByClassName("mobile-menu")[0];

  if (menuButton) {
    menuButton.style.display = "block";
  }

  if (mobileMenu) {
    mobileMenu.style.display = "none";
  }
}
