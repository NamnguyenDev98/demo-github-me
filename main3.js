const closeIcon = document.querySelector(".modal__header i");
const modal = document.querySelector(".modal");
const modalOpen = document.querySelector(".modal__outer");
const closeHide = document.querySelector(".modal__footer button");
closeIcon.addEventListener("click", CloseHandle);
closeHide.addEventListener("click", CloseHandle);
modalOpen.addEventListener("click", CloseHandle);
modal.addEventListener("click", function (e) {
  if (e.target === e.currentTarget) {
    CloseHandle();
  }
});
function CloseHandle(e) {
  modal.classList.toggle("hide");
}
