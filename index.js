const title = (document.getElementById("title"));
console.log(title.textContent);

const content = document.getElementsByClassName("content");
for (let index = 0; index < content.length; index++) {
    console.log(content[index].textContent)
}

const listEls = document.getElementsByTagName("li");
for (let index = 0; index < listEls.length; index++) {
    console.log(listEls[index].textContent)
}

const highlight = document.querySelector(".highlight");
console.log(highlight.textContent);

const highlightAll = document.querySelectorAll(".highlight");
for (let index = 0; index < highlightAll.length; index++) {
    console.log(highlightAll[index].textContent)
}

//Returns first child of the li
const FirstChild = document.querySelector("li:first-child");
//Gives us the element of the parent
const ParNode = FirstChild.parentNode;
console.log(ParNode);
//logs the whole list
console.log(ParNode.textContent);

const itemList = document.getElementById("itemList").childNodes;
for (let index = 0; index < itemList.length; index++) {
    console.log(itemList[index].textContent)
}