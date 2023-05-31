let homepageImg = document.querySelector("#home img");
let homeTitle = document.querySelector("#home h1");
let header = document.querySelector("header");
let stadiumTitle = document.querySelector(".stadium-title");

window.addEventListener("scroll", function () {
  let value = this.scrollY;
  homepageImg.style.top = value * 0 + "px";
  homeTitle.style.top = value * 0.5 + "px";
});

window.addEventListener("scroll", function () {
  let value = this.scrollY;
  stadiumTitle.style.top = value * 0.5 + "px";
});

window.addEventListener("scroll", function () {
  let value = this.scrollY;
  if (value > 1) {
    header.style.position = "sticky";
    header.style.top = 0;
    header.style.backgroundColor = "#6CADE0";
  }
  if (value < 1) {
    header.style = "";
  }
});

let arrowBtn = document.querySelectorAll(".stadium-pic i");
let carousel = document.querySelector(".carousel");
arrowBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id == "right") {
      carousel.scrollLeft += 700;
    } else {
      carousel.scrollLeft -= 700;
    }
  });
});

const box = document.querySelector(".box");
const toRegisterBtn = document.querySelector(".switch-to-register");
const toLoginBtn = document.querySelector(".switch-to-login");
toRegisterBtn.addEventListener("click", () => {
  box.classList.add("switch-page");
});
toLoginBtn.addEventListener("click", () => {
  box.classList.remove("switch-page");
});

function back() {
  const email = document.querySelector(".loginEmail").value;
  const password = document.querySelector(".loginPW").value;

  if (email == "admin@google.com" && password == "admin123") {
    window.location.assign("index.html");
  } else {
    return;
  }
}
