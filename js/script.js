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
    let newItem=document.createElement("li")  //inside the same function, create a new <li> element
    newItem.addEventListener("click", event => { //add anonymous function
        event.preventDefault()
        moveToCompletedList(newItem);         //calling a function by name which we passed the item through

    });
/*Next, if we want to add a text to <li> element, we need to create a text node. We then need to add input value inside text node so that
whenever we enter an input inside a function, it produces an output.*/
let textNode=document.createTextNode(input.value);
// Next, we prepend the text to <li>
newItem.prepend(textNode);
//then, prepend the newItem element to existing element
myList.prepend(newItem);
}
//create a function and use prepend method to move to item from myList to CompletedList
function moveToCompletedList(item){
    moveToCompletedList.prepend(newItem);
} 


