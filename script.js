// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });
document.addEventListener("DOMContentLoaded", () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector(body),
    smooth: true,
  });
});

var ec = document.querySelector("#elem-cont");
var fix = document.querySelector("#fixed");
var hideTimeout = null;
ec.addEventListener("mouseenter", function () {
  if (hideTimeout) clearTimeout(hideTimeout);
  fix.style.display = "block";
  fix.style.pointerEvents = "none";
});

ec.addEventListener("mouseleave", function () {
  hideTimeout = setTimeout(function () {
    fix.style.display = "none";
  }, 100);
});

fix.addEventListener("mouseenter", function () {
  if (hideTimeout) clearTimeout(hideTimeout);
  fix.style.display = "block";
  fix.style.pointerEvents = "auto";
});

fix.addEventListener("mouseleave", function () {
  hideTimeout = setTimeout(function () {
    fix.style.display = "none";
    fix.style.pointerEvents = "none";
  }, 100);
});

var e = document.querySelectorAll(".elem");
e.forEach(function (f) {
  f.addEventListener("mouseenter", function () {
    var img = f.getAttribute("img-data");
    fix.style.backgroundImage = `url(${img})`;
    fix.style.pointerEvents = "none";
  });
});

var cards = ["img1.webp", "img2.webp", "img3.webp"];

var paragraphs = [
  "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.",
  "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.",
  "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.",
];

const h1Elements = document.querySelectorAll(".boxleft h1");
var card = document.querySelector(".boxright");
var paragraph = document.querySelector(".boxleft p");

h1Elements.forEach((h1, index) => {
  h1.addEventListener("click", function () {
    h1Elements.forEach((el) => {
      el.classList.remove("active");
    });
    card.style.backgroundImage = `url(${cards[index]})`;
    paragraph.textContent = paragraphs[index];
    this.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll("#page5 .swiper-slide");
  const heading = document.querySelector("#page5 #heading");

  const observerOptions = {
    root: null,
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  observer.observe(heading);
  slides.forEach((slide) => {
    observer.observe(slide);
  });
});
var loader = document.querySelector("#loader");
setTimeout(function () {
  loader.style.top = "-100%";
}, 4200);

var menu = document.querySelector("#menu");
var rmenu = document.querySelector("#rmenu");
var navimg = document.querySelector("nav img");
var cross = document.querySelector("#cross");
var m = document.querySelector("#m");
var flag = 0;
menu.addEventListener("click", function () {
  if (flag == 0) {
    rmenu.style.top = 0;
    navimg.style.opacity = 0;
    cross.style.opacity = 1;
    m.style.opacity = 0;
    flag = 1;
  } else {
    rmenu.style.top = "-100%";
    navimg.style.opacity = 1;
    cross.style.opacity = 0;
    m.style.opacity = 1;
    flag = 0;
  }
});
