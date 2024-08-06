// Add some interactivity to the website

function myFunction() {
  let element = document.body;
  let dark = element.classList.toggle("dark-mode");

  let logo = document.getElementsByClassName("logo")[0];
  let darkImg = document.getElementsByClassName("dark")[0];
  let lightImg = document.getElementsByClassName("light")[0];

  if (logo && darkImg && lightImg) {
    if (dark) {
      logo.setAttribute("src", "./images/alarado-icon-homepage-dark.svg");

      darkImg.setAttribute("src", "./images/Moon_fill.svg");
      darkImg.style.background = "#f2f9fe";

      lightImg.setAttribute("src", "./images/Sun_fill_light.svg");
      lightImg.style.background = "#223344";
    } else {
      logo.setAttribute("src", "./images/alarado-icon-homepage.svg");
      darkImg.setAttribute("src", "./images/Moon_fill_light.svg");
      darkImg.style.background = "#223344";
      lightImg.setAttribute("src", "./images/Sun_fill.svg");
      lightImg.style.background = "#f2f9fe";
    }
  }
}
