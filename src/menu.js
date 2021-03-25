function createMenu() {
  const main = document.createElement("main");

  const menu = document.createElement("section");
  menu.classList.add("menu");
  main.appendChild(menu);

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("menu-title");
  menu.appendChild(titleDiv);

  const title = document.createElement("h2");
  title.textContent = "Menu";
  titleDiv.appendChild(title);
  
  const textDiv = document.createElement("div");
  textDiv.classList.add("menu-text");

  for (let i = 1; i <= 5; i++) {
    const row = document.createElement("div");
    row.classList.add("menu-row");

    const course = document.createElement("h4");
    row.appendChild(course);

    const firstProp = document.createElement("p");
    const secondProp = document.createElement("p");
    row.appendChild(firstProp);
    row.appendChild(secondProp);

    if (i == 1) {
      course.textContent = "Appetizer";
      firstProp.textContent = "Bagel";
      secondProp.textContent = "Cracker";
    } else if (i == 2) {
      course.textContent = "First Course";
      firstProp.textContent = "Bread soup";
      secondProp.textContent = "Pieces of baguette with milk";
    } else if (i == 3) {
      course.textContent = "Main Course";
      firstProp.textContent = "Wheat bread with butter";
      secondProp.textContent = "Banana Bread with kvass on side";
    } else if (i == 4) {
      course.textContent = "Dessert";
      firstProp.textContent = "Lots of cupcakes";
      secondProp.textContent = "Pecan Pie";
    } else if (i == 5) {
      course.textContent = "Wine";
      firstProp.textContent = "White: Chardobreaday";
      secondProp.textContent = "Red: Pinot Breadoir";
    }
    textDiv.appendChild(row);
    menu.appendChild(textDiv);
  }
  return main;
}

export default createMenu;