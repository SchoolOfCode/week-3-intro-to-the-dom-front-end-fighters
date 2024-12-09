//Ticket 1a

const title = document.getElementById("title");
console.log(title.textContent);

//Ticket 1b
const content = document.getElementsByClassName("content");
for (let index = 0; index < content.length; index++) {
  console.log(content[index].textContent);
}

//Ticket 1c
const listEls = document.getElementsByTagName("li");
for (let index = 0; index < listEls.length; index++) {
  console.log(listEls[index].textContent);
}

//Ticket 1d
const highlight = document.querySelector(".highlight");
console.log(highlight.textContent);

//Ticket 1e
const highlightAll = document.querySelectorAll(".highlight");
for (let index = 0; index < highlightAll.length; index++) {
  console.log(highlightAll[index].textContent);
}

//Ticket 2a
//Returns first child of the li
const FirstChild = document.querySelector("li:first-child");
//Gives us the element of the parent
const ParNode = FirstChild.parentNode;
console.log(ParNode);
//logs the whole list
console.log(ParNode.textContent);

//Ticket 2b
const itemList = document.getElementById("itemList").childNodes;
for (let index = 0; index < itemList.length; index++) {
  console.log(itemList[index].textContent);
}

//Ticket 2c
const itemUl = document.getElementById("itemList").children;
console.log(itemUl);

//Ticket 2d
const firstLast = document.getElementById("itemList").firstElementChild;
const lastFirst = document.getElementById("itemList").lastElementChild;
console.log(firstLast.textContent, lastFirst.textContent);

//Ticker 3a
const redTitle = document.getElementById("title").style.cssText = "color: blue; font-size: 30px";
console.log(redTitle)

//Ticket 3b
const p = document.createElement("p");
p.append("This is a dynamically added paragraph.");
document.body.appendChild(p);

//Ticket 3c
const updated = document.getElementsByClassName("content");
updated[0].textContent = "This paragraph has been updated.";

//Ticket 3d
updated[1].setAttribute("title", "Hover over me!");

//Ticket 3e
const addClass = document.getElementById("itemList");
addClass.classList.add("styled-list")

const removeClass = document.getElementsByClassName("list-item")
removeClass[1].classList.remove("list-item")

//Ticket 3f
const removeElements = document.getElementsByClassName("list-item");
removeElements[2].remove();