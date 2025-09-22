console.log("Hola mundo");
//debbuger es una pausa para ejecutar el codigo 
//alert cuadro de dialogo mostrando un mensaje
//confirm cuadro para aceptar o cancelar
// prompt cuadro para ingresar un texto
// prompt("Ingresa tu nombre" //aparece arriba, "escribilo aca"//aparece adentro del cuadeo de escribir);

// let nombre = prompt("Ingresa tu nombre");
// alert("Hola " + nombre);

// let nombre = "";
// console.log("Hola ", nombre);  
// nombre = prompt("Ingresa tu nombre");
// console.log("Hola ", nombre);
// alert("Hola " + nombre);



//definimos variables age para almacenar el valor de edad
// let age = null;
// //pedir al usuario que ingrese su edad
// age = prompt("Ingresa tu edad");

// if (age == 90  )    {
//     console.log(" tienes 90 años");
// } else if(age < 90) {
//     console.log(" tienes menos de 90 años");
    
// } else {
//     console.log(" tienes mas de 90 años");
// }


let saldo = 0;
let deposito = 0;
deposito = + prompt("deposita tu saldo", "aqui");
saldo += Number.parseInt(deposito);
console.log("tu saldo es " + saldo);
saldo = + prompt("ingresa un monto");
saldo += deposito;
console.log("tu saldo es ahora " + saldo);


let word = "hola mundo";
word.lastIndexOf("mundo");
