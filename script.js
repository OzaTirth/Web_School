document.addEventListener("DOMContentLoaded", function () {
  let mobile_menu = document.querySelector("#mobile_menu");
  let menu_icon = document.querySelector("#burger-checkbox");

  if (menu_icon && mobile_menu) {
    menu_icon.addEventListener("click", function () {
      if (mobile_menu.style.display === "block") {
        mobile_menu.style.display = "none";
        menu_icon.checked = false;
      } else {
        mobile_menu.style.display = "block";
      }
    });
  }

  const nextButton = document.querySelector(".next-button");
  const prevButton = document.querySelector(".prev-button");

  if (nextButton && prevButton) {
    nextButton.addEventListener("click", () => {
      const slides = document.querySelectorAll(".slide");
      if (slides.length > 0) {
        document.querySelector(".slide-track").appendChild(slides[0]);
      }
    });

    prevButton.addEventListener("click", () => {
      const slides = document.querySelectorAll(".slide");
      if (slides.length > 0) {
        document
          .querySelector(".slide-track")
          .prepend(slides[slides.length - 1]);
      }
    });
  }

  let parent1 = document.querySelector(".img_test");
  let p5two1 = document.querySelector(".p5two1");

  if (parent1 && p5two1) {
    p5two1.addEventListener("mouseenter", function () {
      parent1.style.backgroundImage = "url('videos/Parent_1_gif.gif')";
    });
  }

  function createCounter(counterId, target, speed) {
    let count = 0;
    let flag = false;
    let counterElement = document.querySelector(counterId);

    function updateCounter() {
      if (counterElement && count <= target) {
        counterElement.innerText = count;
        count += Math.ceil(target / 100);
        setTimeout(updateCounter, speed);
      }
    }

    if (counterElement) {
      let observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !flag) {
            flag = true;
            updateCounter();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(counterElement);
    }
  }

  createCounter("#counter1", 2345, 10);
  createCounter("#counter2", 202, 15);
  createCounter("#counter3", 98, 15);

  let sections = {
    sp2bell: "#spage2",
    sp2food: "#spage3",
    sp2after: "#spage4",
    sp2transport: "#spage5",
    sp2ssc: "#spage6",
  };

  Object.keys(sections).forEach((buttonId) => {
    let button = document.querySelector(`#${buttonId}`);
    let section = document.querySelector(sections[buttonId]);

    if (button && section) {
      button.addEventListener("click", function () {
        Object.values(sections).forEach((secId) => {
          let sec = document.querySelector(secId);
          if (sec) sec.style.display = "none";
        });
        section.style.display = "block";
      });
    }
  });
});

let herotext = document.querySelector("#hero-text");
let hero_img = document.querySelector("#hero-img");

let sp2bell = document.querySelector("#sp2bell");
let sp2food = document.querySelector("#sp2food");
let sp2after = document.querySelector("#sp2after");
let sp2transport = document.querySelector("#sp2transport");
let sp2ssc = document.querySelector("#sp2ssc");

sp2bell.addEventListener("click", function () {
  herotext.innerText = "BELL SCHEDULE";
  hero_img.src = "img/school_recess.jpg"; 
});


sp2food.addEventListener("click", function () {
  herotext.innerText = "FOOD MENU";
  hero_img.src = "img/hero-food.png";
});

sp2after.addEventListener("click", function () {
  herotext.innerText = "AFTER SCHOOL";
  hero_img.src = "img/after-school.jpg"; 
});


sp2transport.addEventListener("click", function () {
  herotext.innerText = "Transportation";
  hero_img.src = "img/transportation.png"; 
});


sp2ssc.addEventListener("click", function () {
  herotext.innerText = "SSC/ELAC";
  hero_img.src = "img/after-school.jpg"; 
});