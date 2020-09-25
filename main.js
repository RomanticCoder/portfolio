const bookmark = document.querySelector(".bookmark");
const bookmark__items = document.querySelectorAll(".navbar__bookmark__item");
bookmark.addEventListener("click", () => {
  bookmark__items.forEach((item) => {
    item.classList.toggle("active");
  });
});
