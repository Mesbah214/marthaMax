// Select the footer textSlider
var footerTextSlider = document.querySelector(
  ".footer__textCarousel__container__slider"
);

// Select the arrow buttons
var footerArrowLeft = document.querySelector(
  ".footer__textCarousel__control .Left"
);

var footerArrowRight = document.querySelector(
  ".footer__textCarousel__control .Right"
);

// Initial position of the slider
var footerIndex = 0;

// Select the slider
var footerImgSlider = document.querySelector(
  ".footer__imgCarousel__container__slider"
);

// Select all span inside places
var places = document.querySelectorAll(".places span");

// Eventlisteners
footerArrowLeft.addEventListener("click", function () {
  if (footerIndex > 0) {
    footerIndex--;
  } else {
    footerIndex = 0;
  }
  footerSlideChange(footerIndex);
});

footerArrowRight.addEventListener("click", function () {
  if (footerIndex < 1) {
    footerIndex++;
  } else {
    footerIndex = 1;
  }
  footerSlideChange(footerIndex);
});

// change slides
function footerSlideChange(footerIndexValue) {
  document.querySelector(".places .active").classList.remove("active");

  places[footerIndexValue].classList.add("active");

  footerTextSlider.style.transform =
    "translateX(" + footerIndexValue * -50 + "%)";

  reset();

  footerImgSlider.children[footerIndexValue].style.opacity = 1;
}

function reset() {
  for (var i = 0; i < footerImgSlider.children.length; i++) {
    footerImgSlider.children[i].style.opacity = 0;
  }
}
