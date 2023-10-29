const list = document.querySelector(".projects-list");

list.addEventListener("click", openCardBox);

function openCardBox(e) {
  const parentItem = e.target.parentElement;

  if (!parentItem || parentItem === list || null) {
    return;
  }

  removeCardBox();

  const cardBox = parentItem.querySelector(".card-box");
  cardBox.classList.toggle("is-active");
}
// сделать функцию, которя будет открывать cardBox

function removeCardBox() {
  const allCardBoxes = document.querySelectorAll(".is-active");

  allCardBoxes.forEach((box) => {
    if (box.classList.contains("is-active")) {
      box.classList.toggle("is-active");
    }
  });
}
