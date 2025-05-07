// example 1: Accessing DOM Elements
document.getElementById("mybutton").addEventListener("click", function () {
  document.getElementById("myparagraph").textContent = "Text changed!";
});

// Example 2: Using a Function to Change Text
document
  .getElementById("highlightButton")
  .addEventListener("click", function () {
    const citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

// Example 3: Changing Coffee Order
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.color = "blue";
  coffeeType.style.fontSize = "20px";
});

// Example 4: Add new item to shopping list
document.getElementById("addNewItem").addEventListener("click", function () {
  let addNewItem = document.createElement("li");
  addNewItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(addNewItem);
});

// Example 5: Remove elements
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

// Example 6
document
  .getElementById("eventButton")
  .addEventListener("mouseover", function () {
    alert("Button was hovered over!");
  });

// Example 7
document.getElementById("teaList").addEventListener("click", function (event) {
  let selectedTea = event.target.textContent;
  alert("You selected: " + selectedTea);
});

// Example 8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is: ${feedback}`;
  });

// Example 9: Update text after DOM loads
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").innerText = "DOM Loaded!";
});

// Example 10: Toggle highlight class on button click
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    document.getElementById("colorText").classList.toggle("highlight");
  });
