// Select containers that holds the slides
var presBgSlider = document.querySelector(
  ".sectionPresentation__carousel__container__slider"
);

var presTxtSlider = document.querySelector(
  ".sectionPresentation__textCarousel__container__slider"
);

// Select the arrow buttons
var presArrowLeft = document.querySelector(".Left");
var presArrowRight = document.querySelector(".Right");

// Select the navigation dots
var presNavDots = document.querySelectorAll(".sectionPresentation__dots li");

// Initial position of the sliders
var presCount = 0;

// Eventlistener for buttons
presArrowRight.addEventListener("click", function () {
  if (presCount < 3) {
    presCount++;
  } else {
    presCount = 3;
  }
  presChangeSlides(presCount);
});

presArrowLeft.addEventListener("click", function () {
  if (presCount > 0) {
    presCount--;
  } else {
    presCount = 0;
  }
  presChangeSlides(presCount);
});

// Eventlistener for dots
for (var i = 0; i < presNavDots.length; i++) {
  presNavDots[i].addEventListener("click", presBindClick(i));
}

function presBindClick(i) {
  return function () {
    presCount = i;
    presChangeSlides(presCount);
  };
}

// Change slides inside the presentation section
function presChangeSlides(presNum) {
  document
    .querySelector(".sectionPresentation__dots .active")
    .classList.remove("active");

  presNavDots[presNum].classList.add("active");

  presBgSlider.style.transform = "translateX(" + presNum * -25 + "%)";
  presTxtSlider.style.transform = "translateX(" + presNum * -25 + "%)";
}
