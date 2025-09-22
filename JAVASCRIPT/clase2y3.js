// let num =10;
// num = num + 10;
// console.log(num);
// num=+num*2  ;
// console.log(num);


// let num = 10;
// console.log("la variable num es " + num + ". es de tipo " + typeof(num));
// let palabra = "hola mundo";
// console.log("la variable palabra es " + palabra + ". es de tipo " + typeof(palabra));

// num = "ahora soy una palabra";
// console.log("la variable num es ahora " + num + ". es de tipo " + typeof(num));

// let indefinida;
// console.log (typeof(indefinida));
// indefinida = num;
// console.log(typeof(indefinida));

//ejemplo de boolean
// let isuser = true;
// if (isuser !== true) {
//     console.log("acceso a la pagina");
// } else {
//     console.log("no acceso a la pagina");
// }


//ejemplo de null
// let sinvalor = null;
// console.log(typeof(sinvalor));
// console.log(sinvalor);


// ARRAY
// let cliente = {
//     nombre: "milagros",
//     edad: 30,
//     saldo: 1000,
//     Ispremiun: true
// }; 
// if (cliente.Ispremiun === true) {
//     console.log("el cliente es premium enviar mail al "+ cliente.nombre);
// } else {
//     console.log("el cliente no es premium");
// }
// //las llaves indican que es un objeto 


// let cliente2 = {
//     nombre: "sofia",
//     edad: 40,
//     saldo: 550,
//     Ispremiun: true,
   
// };

// let clientes = [cliente, cliente2];

// console.table(clientes);

// let cliente3 = {
//     nombre: "maria",
//     edad: 50,
//     saldo: 5555
    
// };

// let cliente4 = {
//     nombre: "juan",
//     edad: 60,
//     saldo: 5555
    
// };

// clientes[clientes.length] = cliente3;
// console.table(clientes);




//FUNCIONES
// function suma(num1, num2) {
//     return num1 + num2;
// }
// let resultado = suma(10, 20);
// console.log(resultado);


// let str = "321";
// let num = parseInt(str);

// const userName = prompt("Ingrese su nombre").trim();

// const hourNow = new Date().get;
// console.log(hourNow> 21);
// if(hourNow ===21){
// alert ("son las 20hs")
// }

// const userName = prompt("Ingrese su nombre").trim();
// const hourNow = new Date().getHours();
// console.log(hourNow);
// if(hourNow >=6 && hourNow <=12){
// alert ("buen dia" + userName)
// }else if(hourNow >=13 && hourNow <=19){
//     alert ("buenas tardes" + userName)
//     }else if(hourNow >=20 && hourNow <=23){
//         alert ("buenas noches" + userName)}
//         else{
// alert ("anda a dormir pls" + userName)
//         }
const userName = prompt("Ingrese su nombre").trim();
const dayNow = new Date().getDay();
// console.log(dayNow);
// if(dayNow ===0){
// alert ("domingo" + userName)
// }else if(dayNow ===1){
//     alert ("lunes" + userName)
//     }else if(dayNow ===2){
//         alert ("martes" + userName)
//         }else if(dayNow ===3){
//             alert ("miercoles" + userName)
//             }else if(dayNow ===4){
//                 alert ("jueves" + userName)
//                 }else if(dayNow ===5){
//                     alert ("viernes" + userName)
//                     }else if(dayNow ===6){
//                         alert ("sabado" + userName)
//                         }

switch (dayNow) {
    case 0:
        alert ("domingo" + userName)
        break;
    case 1:
        alert ("lunes" + userName)
        break;
    case 2:
        alert ("martes" + userName)
        break;
    case 3:
        alert ("miercoles" + userName)
        break;
    case 4:
        alert ("jueves" + userName)
        break;
    case 5:
        alert ("viernes" + userName)
        break;
    case 6:
        alert ("sabado" + userName)
        break;
    default:
        alert ("no es un dia valido" + userName)
        break;
}
