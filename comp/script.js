const addNewItem = document.getElementById("new_item")
const newItem = document.getElementById("newText")
const tray = document.getElementById("tray")
const add = document.getElementById("add")
const listItemsout = document.querySelector("#listItemsout")

// tray.style.display = "none"



addNewItem.addEventListener("click", ()=>{
    tray.style.display = "block"
})

add.addEventListener("click", ()=>{
    if(newItem.value == 0 ){
        alert("input a To Do")
    } else{
        const newId = toDoList.length > 0 ? toDoList[toDoList.length - 1].id + 1 : 1;
        console.log(newItem.value)
        const newToDoItem = {
            id: newId,
            value: newItem.value
        };
        toDoList.push(newToDoItem);
       console.log("Added:", newToDoItem);
       updateList();
    }
})





function updateList() {
    listItemsout.innerHTML = ""; // Clear the existing list

    toDoList.forEach(element => {
        const listItem = document.createElement("li");
        listItem.textContent = element.value;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "DEL";
        deleteButton.addEventListener("click", () => {
            deleteItem(element.id);
        });

        const doneButton = document.createElement("button");
        doneButton.textContent = "DONE";
        doneButton.addEventListener("click", () => {
            markDone(element.id);
        });

        listItem.appendChild(deleteButton);
        listItem.appendChild(doneButton);

        if (element.done) {
            listItem.classList.add("completed"); // Apply completed class
        }

        listItemsout.appendChild(listItem);
    });
}

function deleteItem(id) {
    const index = toDoList.findIndex(item => item.id === id);
    if (index !== -1) {
        toDoList.splice(index, 1);
        updateList();
    }
}
function markDone(id) {
    const index = toDoList.findIndex(item => item.id === id);
    if (index !== -1) {
        toDoList[index].done = true; // Mark item as done
        updateList();
    }
}



// Call updateList to populate the list when the page loads
updateList();
