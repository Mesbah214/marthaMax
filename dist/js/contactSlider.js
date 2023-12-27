// Select all city names
var names = document.querySelectorAll(".countries li");

// Select all times__slider
var times = document.querySelectorAll(".times__slider");

// Select all bookkeepingNo__slider
var bookkeeping = document.querySelectorAll(".bookkeepingNo__slider");

// Select all humanResourceDepartment__slider
var humanResource = document.querySelectorAll(".humanResourceDepartment__slider");

//Select image container
var imgContainer = document.querySelector(".locImages__sliderContainer");

// Select address container
var address = document.querySelector(".address__sliderContainer");

// Initial index value
var index = 0;

// addEventListener to all buttons
for (i = 0; i < names.length; i++) {
  names[i].addEventListener("click", bindClick(i));
}

// Moves to the clicked section
function bindClick(i) {
  return function () {
    index = i;
    reset();
    showTime(index);
    displayImgAddr(index);
  };
}

// To view the selected time
function showTime(value) {
  times[value].style.opacity = 1;
  bookkeeping[value].style.opacity = 1;
  humanResource[value].style.opacity = 1;
  names[value].classList.add("active");
}

function reset() {
  for(var i = 0; i < names.length; i++) {
    times[i].style.opacity = 0;
    bookkeeping[i].style.opacity = 0;
    humanResource[i].style.opacity = 0;
    names[i].classList.remove("active");
  }
}

function displayImgAddr(dir) {
  imgContainer.style.transform = "translateX(" + dir * -16.67 + "%)";
  address.style.transform = "translateX(" + dir * -16.67 + "%)";
}