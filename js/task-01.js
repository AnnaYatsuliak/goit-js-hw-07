// -------------Task1.1-----------------

const categories = document.querySelectorAll("ul#categories li.item");
console.log("Number of categories: ", categories.length);

// -------------Task1.2-----------------

categories.forEach((item) => {
  console.log("Category: ", item.querySelector("h2").innerText);
  console.log("Elements: ", item.querySelectorAll("ul li").length);
});
