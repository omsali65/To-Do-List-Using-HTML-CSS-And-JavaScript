const inputbx = document.getElementById("inputbox");
const listContainer = document.getElementById("List-container");

function addTask()
{
    if(inputbx.value === '')
    {
        alert("You must write something!");
    }
else{
    let li = document.createElement("li");
    li.innerHTML = inputbx.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);
    }
    inputbx.value = "";
    saveData();
}

listContainer.addEventListener("click",function(e)
{
    if(e.target.tagName === "LI")
        {
            e.target.classList.toggle("checked");
            saveData();

        }
        else if(e.target.tagName === "SPAN")
            {
                e.target.parentElement.remove();
                saveData();
            }
        
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask();
    
