/* Requirements: 
1. user can add a new item to your list
2. user can move list item from my list to completed list

To do this in JS, 
1. declare variables for input, button, list item and list */
let input = document.getElementById("addItem");
let button = document.querySelector("#addBtn");
let myList = document.getElementById("myList");
let completedList = document.getElementById("completedList")
console.log(input);
console.log(button);
console.log(myList);

//Create an EventListener
button.addEventListener("click", addToMyList) 
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
    let textNode=document.createTextNode(input.value); //***************uncaught typeError: Cannot read input... */
    // Next, we prepend the text to <li>
    newItem.prepend(textNode);
    //then, prepend the newItem element to existing element
    myList.prepend(newItem); //*********************Uncaught TypeError: Cannot read property 'prepend' of null
}
//create a function to move to item from myList to CompletedList
function moveToCompletedList(newItem){
    completedList.prepend(newItem);
} 


