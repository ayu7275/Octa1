const inputBox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");
function Addtask()
{
    if(inputBox.value === '')
    {
        alert("You must write something");
    }
    else{
        //debugger;
        let li = document.createElement("li");
        // this line is creating an list type element
        li.innerHTML=inputBox.value;
        listcontainer.appendChild(li);
        //dynamically add list to ul listcontainer
        let span = document.createElement("span");
        span.innerHTML="\u00d7"; //cross icon
        li.appendChild(span);
    }
    inputBox.value= " ";
    saveData();
}
//logic for cross tick when click should remove corresponding
//list item

// this listcontainer has all the list item
listcontainer.addEventListener("click", function(e)
{
    //debugger;
    // if we clicked on LI
    //it should add the checked class name
    // if not checked , then it will add list classlist toggle
    //to check
    if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked")
    saveData();
    }
    // if we click on the span element(here cross icon)
//it will delete  the parent element li
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
    }
    saveData();

}, false);

//func logic for when we refresh page our list 
// is dissapering.

function saveData()
{
    localStorage.setItem("data", listcontainer.innerHTML)
    //here we need to save listcontainer data in browser
}
function showTask()
{
    listcontainer.innerHTML=localStorage.getItem("data")
    // it will show all content stored in localstorage data variable
}
showTask();
