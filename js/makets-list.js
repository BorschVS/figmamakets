const list = document.querySelector(".projects-list");

const listItem = document.querySelector(".projects-list__item");

// const cartBox = document.querySelector(".cart-box");

list.addEventListener("click", onListClick);
function onListClick(evt) {
  if (evt.target.classList.contains("projects-list__item")) {
    return;
  }

  const swatchEl = evt.target;
  const parentEl = swatchEl.closest(".projects-list__item");
  console.log(parentEl);
  const childEl = parentEl.querySelector(".cart-box");
  childEl.classList.toggle("is-active");
}
