const input = document.querySelector("input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxesList = document.querySelector("#boxes");

create.addEventListener("click", () => {
  destroyBoxes();
  createBoxes(input.value);
});

destroy.addEventListener("click", () => {
  destroyBoxes(input.value);
});

function destroyBoxes() {
  boxesList.innerHTML = "";
}

function createBoxes(amount) {
  const arrayBlocks = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.style.background = getRandomHexColor();
    arrayBlocks.push(div);
    size += 10;
  }
  boxesList.append(...arrayBlocks);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
