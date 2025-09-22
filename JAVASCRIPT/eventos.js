// //eventos: cualquier entrada q puede hacer el usuario

// // function saludar(){
// //     console.log("hola");
// // }

// // const boton = document.getElementById("boton");

// // boton.addEventListener("click", function(){
// //     console.log("hola mundo");
// // });


// const form = document.querySelector("form");
// const list = document.querySelector("ul");
// form.addEventListener("submit", handleSubmit);


// function handleSubmit(event){
    
//     const formData = new FormData (form);
//     console.log(formData);
    
//     event.preventDefault();
//     // console.log(event.target.elements [0].value);
//     renderitem(event.target.elements[0].value);
//     form.reset();
//     // console.log(formData.get("nombre"));
// }

// function renderitem(nombre){
//     if(nombre==="") 
//         return;
// const listItem = document.createElement("li");
// listItem.textContent = nombre;
// list.appendChild(listItem);
// }   

const form = document.querySelector("form");
const list = document.querySelector("ul");
const errorMessage = document.getElementById("errorMessage");
form.elements[0].addEventListener("focus", clearErrorMessage);
form.addEventListener("submit", handleSubmit);
let items = [];
function handleSubmit(e) {
    const item = e.target.elements[0].value;
    e.preventDefault();
    if (item === "") {
        errorMessage.textContent = "No te hagas el gato...";
        return;
    }
    createNewItem(item);
    renderItems();
    form.reset();

}
function createNewItem(description) {
    const newItem = {
        id: crypto.randomUUID(),
        description: description
    };
    items.push(newItem);
}

function renderItems() {
    list.innerHTML = "";
    for (let item of items) {
        const listItem = document.createElement("li");
        const btnEraseItem = document.createElement("button");
        btnEraseItem.setAttribute("data-id", item.id);
        btnEraseItem.textContent = "X";
        btnEraseItem.style.color = "tomato";
        btnEraseItem.addEventListener("click", handleDelete);
        listItem.textContent = `${item.id.slice(0, 5)} - ${item.description}`;
        listItem.appendChild(btnEraseItem);
        list.appendChild(listItem);
    }
}
function handleDelete(e) {
    const newArr = items.filter((item) => item.id != e.target.dataset.id);
    items = newArr;
    renderItems();
}
function clearErrorMessage() {

    errorMessage.textContent = "";
}