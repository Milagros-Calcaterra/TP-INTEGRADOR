// //ejemplos del profesor

const { setDefaultResultOrder } = require("dns");

// const btn = document.querySelector("button");
// const ttl = document.querySelector("h1");
// const allParrafos =  document.getElementsByTagName("p");
// const sectionCointainer = document.querySelector(".container");

// console.log (allParrafos)
// allParrafos[5].textContent = "texto modificado";

// function click() {
//     ttl.textContent = "hola mundo";
//     ttl.style.color = "red";
// }
// btn.addEventListener("click", click);

// ttl.addEventListener("mouseenter", function() {
//     ttl.style.color = "blue";
// const para = document.createElement("p");
//     para.textContent = "texto nuevo";
//     para.style.color = "green";
//     para.style.display = "inline";
//     para.style.fontSize = "20px";
//     para.style.padding = "10px 20px";
//     sectionCointainer.appendChild(para);
// });









//ejemplos de las filminas:
// btn.addEventListener("click", ()=> ttl.textContent = "hola mundo"); //addEventListener es una funcion que se ejecuta cuando se hace click en el boton 
// //y se ejeccuta la funcion dentro


// btn.setAttribute("disabled", "true") // desabilita el boton

// const img = document.querySelector("img");
// img.setAttribute("src", "nueva imagen")  
// img.setAttribute("alt", "nueva imagen"); // Cambia el alt;

// const parrafo = document.querySelector("p");
// parrafo.textContent = "texto modificado";


// //creacion y eliminacion de elementos
// const nuevoElemento = document.createElement("div");
// nuevoElemento.textContent = "nuevo elemento"; //texxto directamente adentro de un div
// document.body.appendChild(nuevoElemento);
// //appendchild agrega un hijo del body

// const elementoEliminar = document.getElementById("elementoEliminar");
// elementoEliminar.parentNode.removeChild(elementoEliminar); // selecciono lo que quiero eliminar

// const elemento = document.getElementById("elemento");
// elemento.style.background
// elemento.style.fontSize = "20px";



// // clase 2 de DOM
// const contenedordestacado = document.getElementById("contenedor").getElementsByClassName("destacado");
// console.log(contenedordestacado);



const user = {
    firstname: "milagros",
    lastname: "perez",
    age: 30,
    email: "milagrosperez@gmail.com",

}

const message = `Hola mi nombre es ${user.firstname} ${user.lastname} y tengo ${user.age} años, correo: ${user.email}`;
alert(message);