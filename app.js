/* Created by Tivotal */

let dropDown = document.querySelector(".drop-down");
let header = document.querySelector(".header");
let options = document.querySelectorAll(".menu li");

header.addEventListener("click", () => {
  dropDown.classList.toggle("active");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    dropDown.querySelector(".selected").classList.remove("selected");

    option.classList.add("selected");

    header.firstElementChild.innerText = option.innerText;

    dropDown.classList.remove("active");
  });
});
