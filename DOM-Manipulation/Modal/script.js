"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");
const btnModalOpen = document.querySelectorAll(".show-modal");

const closeModal = () => {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

for (let i = 0; i < btnModalOpen.length; i++) {
  btnModalOpen[i].addEventListener("click", closeModal);
}

closeBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
