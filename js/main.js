"use strict";

// select elements
const textInput = document.querySelector(".text-input");
const textSubmit = document.querySelector(".text-submit");
const itemList = document.querySelector(".item-list");

// functions
const createListItem = function () {
  const item = document.createElement("li");
  item.innerHTML = `${textInput.value}`;
  return item;
};

const createDeleteButton = function () {
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "x";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", (e) => {
    deleteItem(e.target);
  });
  return deleteButton;
};

const createToDoTask = function () {
  const item = createListItem();
  const deleteButton = createDeleteButton();

  const itemContainer = document.createElement("div");
  itemContainer.classList.add("item-container");
  itemContainer.appendChild(item);
  itemContainer.appendChild(deleteButton);
  return itemContainer;
};

const deleteItem = function (item) {
  console.log(item.parentElement.remove());
};

// main
textSubmit.addEventListener("click", (e) => {
  const item = createToDoTask();
  itemList.appendChild(item);
  textInput.value = "";
  textInput.focus();
});
