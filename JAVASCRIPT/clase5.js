// let fullname = "lucia";
// let age = 25;
// let isemployed = true;
// let hobbies = ["jugar", "leer", "escribir"];

// let client01 = {
//     fullname : "lalala",
//     age : 25,
//     isemployed : true,
//     hobbies : ["jugar", "leer", "escribir"],
//     adress: {
//         street: "calle 1",
//         number: 123,
//         city: "ciudad",
//         state: "estado",
//         country: "país"
//     }



// };

// let client02 = {
//     fullname : "sssss",
//     age : 27,
//     isemployed : true,
//     hobbies : ["jugar", "leer", "escribir"],
//     adress: {
//         street: "calle 1",
//         number: 123,
//         city: "ciudad",
//         state: "estado",
//         country: "país"
//     }

// }

// let client03 = {
//     fullname : "aaaa",
//     age : 75,
//     isemployed : true,
//     hobbies : ["jugar", "leer", "cantar"],
//     adress: {
//         street: "calle 3",
//         number: 1234,
//         city: "balcarce",
//         state: "estado",
//         country: "país"
//     }

// }

// let client04 = {
//     fullname : "aaajajajaa",
//     age : 5,
//     isemployed : true,
//     hobbies : ["jugar", "leer", "cantar"],
//     adress: {
//         street: "calle 3",
//         number: 1234,
//         city: "balcarce",
//         state: "estado",
//         country: "país"
//     }

// }

// let clients = [ client01, client02, client03, client04 ];

// for (let i = 0; i < clients.length; i++) { //i++ incrementa el contador0 
//     //se ejecuta lo que esta adentro mientras i sea menor que la longitud del arreglo
//     console.log(clients[i].fullname);
// }

// console.log("chau");

// clients.forEach((client) => {
// console.log(client.fullname);
// }) 

// for (let client of clients) { 
//     console.log (client.age);
// }


// //funciones

const data = [
  {
    fullname: "Lucía Martínez",
    age: 34,
    isemployed: true,
    hobbies: ["leer", "pintar", "cocinar"],
    adress: {
      street: "Av. Siempre Viva",
      number: 742,
      city: "Springfield",
      state: "Massachusetts",
      country: "USA"
    }
  },
  {
    fullname: "Pedro Gómez",
    age: 29,
    isemployed: false,
    hobbies: ["fútbol", "música", "cine"],
    adress: {
      street: "Calle Falsa",
      number: 123,
      city: "Madrid",
      state: "Madrid",
      country: "España"
    }
  },
  {
    fullname: "María López",
    age: 41,
    isemployed: true,
    hobbies: ["yoga", "lectura", "viajar"],
    adress: {
      street: "Diagonal Norte",
      number: 350,
      city: "Buenos Aires",
      state: "Buenos Aires",
      country: "Argentina"
    }
  },
  {
    fullname: "Juan Pérez",
    age: 22,
    isemployed: false,
    hobbies: ["videojuegos", "natación", "leer"],
    adress: {
      street: "Av. del Libertador",
      number: 1000,
      city: "Mendoza",
      state: "Mendoza",
      country: "Argentina"
    }
  },
  {
    fullname: "Sofía Ramírez",
    age: 27,
    isemployed: true,
    hobbies: ["bailar", "cocinar", "leer"],
    adress: {
      street: "Calle 45",
      number: 302,
      city: "Cali",
      state: "Valle del Cauca",
      country: "Colombia"
    }
  },
  {
    fullname: "Carlos Méndez",
    age: 50,
    isemployed: true,
    hobbies: ["pescar", "caminar", "ver películas"],
    adress: {
      street: "Calle 10",
      number: 890,
      city: "Monterrey",
      state: "Nuevo León",
      country: "México"
    }
  },
  {
    fullname: "Ana Torres",
    age: 19,
    isemployed: false,
    hobbies: ["dibujo", "series", "cantar"],
    adress: {
      street: "Callejón Estrella",
      number: 45,
      city: "Valparaíso",
      state: "Valparaíso",
      country: "Chile"
    }
  },
  {
    fullname: "Mateo Ibáñez",
    age: 37,
    isemployed: true,
    hobbies: ["correr", "leer", "viajar"],
    adress: {
      street: "Ruta 3",
      number: 556,
      city: "Trelew",
      state: "Chubut",
      country: "Argentina"
    }
  },
  {
    fullname: "Julieta Acosta",
    age: 31,
    isemployed: true,
    hobbies: ["coser", "leer", "hacer manualidades"],
    adress: {
      street: "Calle 25",
      number: 334,
      city: "La Plata",
      state: "Buenos Aires",
      country: "Argentina"
    }
  },
  {
    fullname: "Tomás Navarro",
    age: 60,
    isemployed: false,
    hobbies: ["leer", "jardinería", "escuchar música"],
    adress: {
      street: "Ruta 11",
      number: 777,
      city: "Mar del Plata",
      state: "Buenos Aires",
      country: "Argentina"
    }
  },
  {
    fullname: "Carla Nieto",
    age: 45,
    isemployed: true,
    hobbies: ["hacer yoga", "leer", "tejer"],
    adress: {
      street: "Calle 9",
      number: 99,
      city: "Rosario",
      state: "Santa Fe",
      country: "Argentina"
    }
  },
  {
    fullname: "Emilia Duarte",
    age: 52,
    isemployed: true,
    hobbies: ["leer", "jardinería", "ver novelas"],
    adress: {
      street: "Av. Central",
      number: 205,
      city: "Montevideo",
      state: "Montevideo",
      country: "Uruguay"
    }
  },
  {
    fullname: "Bruno Suárez",
    age: 40,
    isemployed: false,
    hobbies: ["leer", "ver deportes", "tocar guitarra"],
    adress: {
      street: "Calle del Sol",
      number: 90,
      city: "Cusco",
      state: "Cusco",
      country: "Perú"
    }
  },
  {
    fullname: "Valentina Ríos",
    age: 24,
    isemployed: true,
    hobbies: ["leer", "hacer cerámica", "cantar"],
    adress: {
      street: "Pasaje Luna",
      number: 15,
      city: "San Juan",
      state: "San Juan",
      country: "Argentina"
    }
  },
  {
    fullname: "Santiago Morales",
    age: 35,
    isemployed: true,
    hobbies: ["leer", "escalar", "ver cine"],
    adress: {
      street: "Ruta 40",
      number: 1010,
      city: "El Bolsón",
      state: "Río Negro",
      country: "Argentina"
    }
  },
  {
    fullname: "Isabela Fernández",
    age: 28,
    isemployed: true,
    hobbies: ["leer", "bailar", "hacer ejercicio"],
    adress: {
      street: "Av. América",
      number: 88,
      city: "Quito",
      state: "Pichincha",
      country: "Ecuador"
    }
  },
  {
    fullname: "Ignacio Paredes",
    age: 33,
    isemployed: true,
    hobbies: ["leer", "ver series", "cocinar"],
    adress: {
      street: "Av. Los Incas",
      number: 333,
      city: "Salta",
      state: "Salta",
      country: "Argentina"
    }
  },
  {
    fullname: "Micaela Rodríguez",
    age: 26,
    isemployed: false,
    hobbies: ["leer", "fotografía", "patinar"],
    adress: {
      street: "Calle 2",
      number: 100,
      city: "Corrientes",
      state: "Corrientes",
      country: "Argentina"
    }
  },
  {
    fullname: "Facundo Herrera",
    age: 38,
    isemployed: true,
    hobbies: ["leer", "ciclismo", "programar"],
    adress: {
      street: "Calle de la Paz",
      number: 456,
      city: "Bahía Blanca",
      state: "Buenos Aires",
      country: "Argentina"
    }
  },
  {
    fullname: "Ailén Vega",
    age: 21,
    isemployed: false,
    hobbies: ["leer", "dibujo", "tocar piano"],
    adress: {
      street: "Calle Mitre",
      number: 22,
      city: "San Luis",
      state: "San Luis",
      country: "Argentina"
    }
  },
  {
    fullname: "Gastón Aguirre",
    age: 44,
    isemployed: true,
    hobbies: ["leer", "andar en moto", "ver series"],
    adress: {
      street: "Calle 14",
      number: 200,
      city: "Resistencia",
      state: "Chaco",
      country: "Argentina"
    }
  },
  {
    fullname: "Luz Cáceres",
    age: 39,
    isemployed: true,
    hobbies: ["leer", "pintar", "hacer yoga"],
    adress: {
      street: "Av. San Martín",
      number: 789,
      city: "Formosa",
      state: "Formosa",
      country: "Argentina"
    }
  },
  {
    fullname: "Thiago Alonso",
    age: 30,
    isemployed: false,
    hobbies: ["leer", "videojuegos", "andar en bici"],
    adress: {
      street: "Calle 33",
      number: 66,
      city: "San Rafael",
      state: "Mendoza",
      country: "Argentina"

        }
    },
];


// for (let i = 0; i < data.length; i++) {
//     console.log( `${i+1} - ${data[i].fullname} ${data[i].age} años
//    `)}

//    let counter = 1;
// for (let woman of data) {
//     console.log( `${++counter} - ${woman.fullname} ${woman.age} años
//         `)}


// data.forEach((woman, idx) => {  
//     console.log( `${idx+1} - ${woman.fullname} ${woman.age} años
//     `)
// });


// function sayHello (person = "nadie") {
//     console.log ( "hola" , person );
// }
// sayHello();     //funcion se ejecuta para todos los elementos

// for(woman of data) {     
//     if ( woman.fullname !== "Santiago Morales")     //lo saque
//   sayHello(woman.fullname +" "  + woman.age + " años");
// }

// function sayHello (person = "nadie") {
//    return "hola" , person ;
// }
// ;     //funcion se ejecuta para todos los elementos

// const sayGoodBye = (person) => {    
//     return "Adiós" , person ;
// }
// console.log(sayGoodBye("Santiago Morales"));
// for(woman of data) {    
//     let valorderetorno = sayHello(woman.fullname +" "  + woman.age + " años");
   
//   sayHello(woman.fullname +" "  + woman.age + " años");
//   console.log(valorderetorno);
// }


// //agregarlo al html con el id container
// const container = document.getElementById("container");

// function tarjeta (item) {
//     const card = document.createElement("article");
//     card.innerHTML = `
//     <p>${item.fullname}</p>
//     <img src="${item.adress.country}.png" alt="${item.fullname}">
//             <p>${item.age} años</p>
//             `;
// }

// container.appendChild(card);
// for (woman of data) {
//     const womanelement = document.createElement("p");
//     womanelement.textContent = woman.fullname +" "  + woman.age + " años"; 
//     container.appendChild(womanelement);
// }
// const len = data.length;

// const secretWord = "abracadabra";

// let userWord = "";
// let attemps = 1;

// while (secretWord !== userWord) {

// userWord = prompt("Guess the secret word. Blank `exit`");
// if (userWord === "exit") {
//     break;


// }
// if (attemps > 5 )
//   break;
// attemps++;
// }


// if (userWord === secretWord) {

// alert("Congratulations! You guessed the secret word.");

// } else {
//     alert("Sorry, wrong answer. Try again." + secretWord);
// }

// console.log( "end of game");

// //mientras la palabra secreta no sea igual a la palbra del usuario se le pide al usuario que adiviine
// //la palaba secreta tamvien se le da la opcion de salir

console.log(Math.random());
console.log(Math.round (Math.random() * 100 + 1));

//math.random() genera un numero aleatorio entre 0 y 1
//math.round() redondea un numero a un entero
//math.floor() redondea un numero hacia abajo
//math.ceil() redondea un numero hacia arriba

function randomNumber(min, max) {

return Math.round(Math.random() * (max - min)) + min;
//con max - min + min se le da el rango de numeros que se van a generar
}
console.log(randomNumber(1,10));

