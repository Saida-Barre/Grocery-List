/* Requirements: 
1. user can add a new item to your list
2. user can move list item from my list to completed list

To do this in JS, 
1. declare variables for input, button, list item and list */
let input = document.querySelector("addItem");
let button = document.querySelector("addBtn");
let item = document.querySelector("li");
let myList = document.querySelector("myList");
console.log("addItem");
console.log("addBtn");
console.log("li");
console.log("myList");

//Create an EventListener
button.addEventListener("click", addToMyList) //ERROR: Uncaught TypeError: Cannot read property 'addEventListener' of null
function addToMyList(event){
    event.preventDefault()
    console.log("button pressed!");
}
