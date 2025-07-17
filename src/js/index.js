const openBtn = document.querySelector("[data-modal-open]");
const modalOverlay = document.querySelector("[data-modal]");
const closeBtn = document.querySelector("[data-modal-close]");

openBtn.addEventListener("click", () => {
  modalOverlay.classList.add("show");
  document.body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("show");
  document.body.classList.remove("no-scroll");
});
