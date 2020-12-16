// Select the slider
var sectionPartnerTextSlider = document.querySelector(
  ".sectionPartner__carousel__textCarousel__container__slider"
);

var sectionPartnerImgSlider = document.querySelector(
  ".sectionPartner__imgCarousel__container__slider"
);

// Select the nav dots
var sectionPartnerDots = document.querySelectorAll(".sectionPartner__dots li");

// Initial position of the slider
var sectionPartnerCounter = 0;

// Select buttons
var sectionPartnerLeft = document.querySelector(".arrows .arrow.Left");
var sectionPartnerRight = document.querySelector(".arrows .arrow.Right");

// Add eventListener for the buttons
sectionPartnerLeft.addEventListener("click", function () {
  if (sectionPartnerCounter > 0) {
    sectionPartnerCounter--;
  } else {
    sectionPartnerCounter = 0;
  }
  sectionPartnerSlideChange(sectionPartnerCounter);
});

sectionPartnerRight.addEventListener("click", function () {
  if (sectionPartnerCounter < 2) {
    sectionPartnerCounter++;
  } else {
    sectionPartnerCounter = 2;
  }
  sectionPartnerSlideChange(sectionPartnerCounter);
});

// Eventlistener for dots
for (var i = 0; i < sectionPartnerDots.length; i++) {
  sectionPartnerDots[i].addEventListener("click", sectionPartnerBindClick(i));
}

function sectionPartnerBindClick(i) {
  return function () {
    sectionPartnerCounter = i;

    sectionPartnerSlideChange(sectionPartnerCounter);
  };
}

// Change slides
function sectionPartnerSlideChange(counterValue) {
  document
    .querySelector(".sectionPartner__dots .active")
    .classList.remove("active");

  sectionPartnerDots[counterValue].classList.add("active");

  sectionPartnerImgSlider.style.transform =
    "translateX(" + counterValue * -33.33 + "%)";
  sectionPartnerTextSlider.style.transform =
    "translateX(" + counterValue * -33.33 + "%)";
}
