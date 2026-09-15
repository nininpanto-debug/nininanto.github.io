document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     LIFE & MIRROR NAVIGATION
  ========================== */

  var header = document.querySelector(".lm-header");
  var menuButton = document.querySelector(".lm-menu-toggle");
  var nav = document.querySelector(".lm-nav");

  function updateHeader() {
    if (!header) return;

    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader);


  /* =========================
     MOBILE MENU
  ========================== */

  if (menuButton && nav) {

    menuButton.addEventListener("click", function () {

      var isOpen = nav.classList.toggle("open");

      menuButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      if (isOpen) {
        menuButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      } else {
        menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }

    });

    var navLinks = nav.querySelectorAll("a");

    for (var i = 0; i < navLinks.length; i++) {

      navLinks[i].addEventListener("click", function () {

        nav.classList.remove("open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        menuButton.innerHTML =
          '<i class="fa-solid fa-bars"></i>';

      });

    }
  }


  /* =========================
     BOOKING FORM
     Works on GitHub Pages
     ========================== */

  var bookingForm = document.getElementById("booking-form");
  var bookingSuccess = document.getElementById("booking-success");

  if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

      event.preventDefault();

      var name = document.getElementById("name");
      var whatsapp = document.getElementById("whatsapp");
      var email = document.getElementById("email");
      var date = document.getElementById("date");
      var time = document.getElementById("time");
      var mode = document.getElementById("mode");
      var topic = document.getElementById("topic");

      var message =
        "LIFE & MIRROR - CONVERSATION REQUEST\n\n" +
        "Name: " + (name ? name.value : "") + "\n" +
        "WhatsApp: " + (whatsapp ? whatsapp.value : "") + "\n" +
        "Email: " + (email && email.value ? email.value : "Not provided") + "\n" +
        "Preferred date: " + (date ? date.value : "") + "\n" +
        "Preferred time: " + (time ? time.value : "") + "\n" +
        "Mode: " + (mode ? mode.value : "") + "\n" +
        "Topic: " + (topic && topic.value ? topic.value : "Not provided");

      var whatsappURL =
        "https://wa.me/916238751326?text=" +
        encodeURIComponent(message);

      window.open(whatsappURL, "_blank");

      bookingForm.style.display = "none";

      if (bookingSuccess) {
        bookingSuccess.hidden = false;
      }

    });

  }


  /* =========================
     DISABLE EMPTY PLACEHOLDER
     LINKS
  ========================== */

  var emptyLinks = document.querySelectorAll('a[href="#"]');

  for (var j = 0; j < emptyLinks.length; j++) {

    emptyLinks[j].addEventListener("click", function (event) {
      event.preventDefault();
    });

  }

});
