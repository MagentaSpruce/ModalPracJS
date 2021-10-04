"use strict";

let openModal = document.querySelectorAll(".openModal");
let closeModal = document.querySelector(".closeModal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

const openModalFunc = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModalFunc = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", openModalFunc);
}

closeModal.addEventListener("click", closeModalFunc);

overlay.addEventListener("click", closeModalFunc);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModalFunc();
  }
});
