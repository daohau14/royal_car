// slider
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slider-item");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image every 2 seconds
}

// nav bar responsive
function togge_menu() {
  var togge_header = document.querySelector(".header-mobile-menu");
    if (togge_header.style.display === "block") {
      togge_header.style.display = "none";
    } else {
      togge_header.style.display = "block";
    }
}

function togge_car() {
  var togge_car = document.querySelector(".subnav-car");
    if (togge_car.style.display === "block") {
      togge_car.style.display = "none";
    } else {
      togge_car.style.display = "block";
    }
}
function togge_page() {
  var togge_car = document.querySelector(".subnav-page");
    if (togge_car.style.display === "block") {
      togge_car.style.display = "none";
    } else {
      togge_car.style.display = "block";
    }
}