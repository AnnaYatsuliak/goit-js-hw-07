const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsLiItems = [];
for (let i = 0; i < ingredients.length; i++) {
  const liElement = document.createElement("li");
  liElement.innerHTML = ingredients[i];
  liElement.classList.add("item");
  ingredientsLiItems.push(liElement);
}
console.log(ingredientsLiItems);

const ingredientsElement = document.querySelector("ul#ingredients");

ingredientsElement.append(...ingredientsLiItems)