/*********************
Slide Navigation
**********************/
window.addEventListener("load", function () {
  if (
    document.body.classList.contains("fullscreen") &&
    window.innerWidth > 767
  ) {
    // Make array of sections
    var sections = document.querySelectorAll("section");

    // Select container that contains all the slides
    var content = document.querySelector(".main__content");

    // Set the initial value of the first slide
    var index = 0;

    // Time lapse in ms between current event and last
    var animationDuration = 1000;

    // Set initial value for lastTime
    var lastTime = 0;

    // Initial value for touchstart and touchstate (mobile)
    var initialPosition = null;
    var isDown = false;

    // Eventlistener for keyboard events
    document.addEventListener("keyup", function (e) {
      var currentTime = new Date().getTime();
      // Checks if it is time to change the slide
      if (currentTime - lastTime < animationDuration) {
        e.preventDefault();
        return;
      }

      keyOrWheel(e);
      scrollToSlide(index);
      detect();

      // Record current time as lastTime to use next time
      lastTime = currentTime;
    });

    // Eventlistener for mousewheel events
    document.addEventListener(
      "wheel",
      function (e) {
        var currentTime = new Date().getTime();

        if (currentTime - lastTime < animationDuration) {
          e.preventDefault();
          return;
        }

        keyOrWheel(e);
        scrollToSlide(index);
        detect();

        lastTime = currentTime;
      },
      { passive: false }
    );

    // Eventlisteners for touch and gestures
    if (window.PointerEvent) {
      content.addEventListener("pointerdown", gestureStart);
      content.addEventListener("pointermove", gestureMove);
      content.addEventListener("pointerup", gestureEnd);
    } else {
      document.addEventListener("touchstart", gestureStart);
      document.addEventListener("touchmove", gestureMove);
      document.addEventListener("touchend", gestureEnd);
      document.addEventListener("mousedown", gestureStart);
      document.addEventListener("mousemove", gestureMove);
      document.addEventListener("mouseup", gestureEnd);
    }

    // Make a function for both keyboard and mousewheel to check the direction
    // and update the index value accordingly
    function keyOrWheel(key) {
      if (key.code === "ArrowDown" || key.deltaY > 0) {
        if (index < sections.length - 1) index++;
      } else if (key.code === "ArrowUp" || key.deltaY < 0) {
        if (index > 0) index--;
      }
    }

    // Functions for gesture
    function gestureStart(e) {
      isDown = true;
      initialPosition = e.pageY;
    }

    function gestureMove(e) {
      var animationDuration = 500;
      var currentTime = new Date().getTime();

      if (!isDown) return;
      e.preventDefault();

      var currentPosition = e.pageY;
      var diff = initialPosition - currentPosition;
      if (currentTime - lastTime < animationDuration) {
        e.preventDefault();
        return;
      }
      touch(diff);
      scrollToSlide(index);
      detect();
      lastTime = currentTime;
    }

    function gestureEnd() {
      isDown = false;
    }

    // Function to determine touch direction and update the index value
    function touch(e) {
      if (e > 0) {
        if (index < sections.length - 1) index++;
      } else if (e < 0) {
        if (index > 0) index--;
      }
    }

    /*********************
    Dot Navigation
    **********************/
    var sec_nav = " ";

    // Create buttons for each sections
    for (var i = 0; i < sections.length; i++) {
      sec_nav += '<div class="sec_button"></div>';
    }

    // Place buttons inside the element
    document.querySelector(".sidebar__navigation").innerHTML = sec_nav;

    // Select all buttons
    var buttons = document.querySelectorAll(".sec_button");

    // Add active class to first button
    buttons[0].classList.add("active");

    // addEventListener to all buttons
    for (i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", bindClick(i));
    }

    // Moves to the clicked section
    function bindClick(i) {
      return function () {
        index = i;
        scrollToSlide(index);
        detect();
      };
    }

    // Make a function to move the window according to index number
    function scrollToSlide(num) {
      content.style.transform = "translateY(-" + num * 100 + "vh)";

      // Removes active class from previous section
      document.querySelector(".sec_button.active").classList.remove("active");

      //Add active class to current section
      buttons[num].classList.add("active");
    }

    // detects a section and changes style
    function detect() {
      var bar = document.querySelector(".sidebar");
      var dots = document.querySelectorAll(".sec_button");

      if (
        content.style.transform === "translateY(-200vh)" ||
        content.style.transform === "translateY(-500vh)"
      ) {
        bar.style.borderLeftColor = "rgba(0, 0, 0, 0.1)";

        for (var i = 0; i < dots.length; i++) {
          dots[i].style.backgroundColor = "black";
        }
      } else {
        bar.style.borderLeftColor = "rgba(255, 255, 255, 0.1)";

        for (var i = 0; i < dots.length; i++) {
          dots[i].style.backgroundColor = "white";
        }
      }
    }
  }
});

/*********************
Navigation menu button
**********************/

// Select the class
/*
var navBtn = document.querySelector(".navbar-toggler");

navBtn.addEventListener("click", function () {
  if (navBtn.classList.contains("menu-open")) {
    this.classList.remove("menu-open");
    this.textContent = "close";
  } else {
    this.classList.add("menu-open");
    this.textContent = "menu";
  }
});
*/

// var nav = document.querySelector(".navigation").clientHeight;
// var id = document.getElementById("myNav");
// var navButton = document.querySelector(".navbar-toggler");

// document.addEventListener("click", function () {
//   // something
// });
