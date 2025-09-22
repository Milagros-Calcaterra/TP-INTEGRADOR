// // FUNCION CONSTRUCTORA

// function Country (name, flagsColors, population, language, capital) {
//     this.name = name;
//     this.flagsColors = flagsColors;
//     this.population = population;
//     this.language = language;
//     this.capital = capital;
//     this.printInfo = function() {
//         console.log(`el pais se llama `, this.name); 
//         console.log(`los colores de la bandera son`,this.flagsColors);
//         console.log(`la cantidad de habitantes es de `,this.population);
//         console.log(`el idioma es `,this.language);
//         console.log( `la capital es `,this.capital);
//     }
// }

// const Argentina = new Country("Argentina", ["celeste", "blanco"], 45000000, "español", "Buenos Aires");
// Argentina.printInfo();

// const Brasil = new Country("Brasil", ["celeste", "negro"], 20000000, "portugués", "Brasília");
// Brasil.printInfo();


// this.backdoor = function() {
//     console.log(this);
// }
// Argentina.backdoor();


// SIN FUNCION CONSTRUCTORA, CODIGO MAS LARGO

// let Argentina = {
//     name: "Argentina",
//     flagsColors: ["celeste", "blanco"],
//     population: 45000000,
// language: "español",
// capital: "Buenos Aires",



// };
//OBJETO LITERAL:
// let Brasil = {
//     name: "Brasil",
//     flagsColors: ["celeste", "negro"],
//     population: 20000000,
// language: "portugués",
// capital: "Brasília",
// };

// // let Chile = {
// //     name: "Chile",
// //     flagsColors: ["celeste", "naranja"],
// //     population: 17000000,
// // language: "español",
// // capital: "Santiago",
// // printInfo() {
// //     console.log(`el pais se llama `, this.name); 
// //     console.log(this.flagsColors);
// //     console.log(this.population);
// //     console.log(this.language);
// //     console.log(this.capital);

// // // siempre dentro de un objeto cuando me refiero a las propiedades del objeto, 
// // // hay que usar elTHIS q se refiere al contexto en el que estoy trabajando.
// // //  por ej cuando pongo printInfo hay q usarlo
// // }
// // };

// // Chile.printInfo();




 //getters
// let Argentina = {
//     name: "Argentina",
//     flagsColors: ["celeste", "blanco"],
//     population: 45000000,
// language: "español",
// capital: "Buenos Aires",

// get Info() { //get es palabra reservada para acceder a las propiedades , nunca mezclar geter con methodos
//     //metodos hace una operacion externa a la propiedad  
//     console.log(`el pais se llama `, this.name); 
//     console.log(this.flagsColors);
//     console.log(this.population);
//     console.log(this.language);
//     console.log(this.capital);
// }
// get flagsColors()
// {
//     console.log(this.flagsColors);

// },

// set countryN(name) {
//     this.name = name;
// }

// }
// Argentina.Info();

// //setters
// let brasil = {
//     name: "Brasil",
//     flagsColors: ["celeste", "negro"],
//     population: 20000000,
// }
// Argentina.Info();


// brasil.name = "Br";
// brasil.Info;


//ejemplo del profe q no me anda
// const bra = {
//     countryName: "Brasil",
//     colorDeBandera: ["verde", "amarillo", "azul"],
//     poblacion: 213000000,
//     idioma: "portugués",
//     capital: "Brasilia",
//     get Info() {
//         console.log(`El pais se llama, ${this.countryName}`);
//         console.log(`El color de bandera es ${this.colorDeBandera}`);
//         console.log(`El capital es ${this.capital}`);
//         console.log(`El idioma es ${this.idioma}`);
//         console.log(`La población es ${this.poblacion}`);   
//     },

//     set countryN(name) {
//         if (name.length <= 3) {
//             throw new Error("cortito");
//         }else{this.countryName = name;}
//     },
        

//     saveToDB()  {  
//         const data = {
//             countryName: this.countryName,
//             colorDeBandera: this.colorDeBandera,
//             poblacion: this.poblacion,
//             idioma: this.idioma,
//             capital: this.capital,
//         };
//         console.log(`Se guarda en la base de datos: ${data}`);
//     }
// }
    
//     bra.countryN = Brasillia;
//     bra.Info;






//THIS EN EVENTOS

// const btn = document.querySelector("button");
// btn.addEventListener("click", function() {
//     console.log(`hiciste click en  ${this.textContent}`);
// });


//CLASES
// class country {
//     constructor(name, flagsColors, population, language, capital) {
//         this.name = name;
//         this.flagsColors = flagsColors;
//         this.population = population;
//         this.language = language;
//         this.capital = capital;
//         this.printInfo = function() {
//             console.log(`el pais se llama `, this.name); 
//             console.log(`los colores de la bandera son`,this.flagsColors);
//             console.log(`la cantidad de habitantes es de `,this.population);
//             console.log(`el idioma es `,this.language);
//             console.log( `la capital es `,this.capital);
//         }
//     }
//     get countryinfo() {
//         return `el pais se llama ${this.name} los colores de la bandera son ${this.flagsColors} la cantidad de habitantes es de ${this.population} el idioma es ${this.language} la capital es ${this.capital}`;
//     }
// }

// const Argentina = new country("Argentina", ["celeste", "blanco"], 45000000, "español", "Buenos Aires");
// console.log(Argentina.countryinfo);

// const Brasil = new country("Brasil", ["celeste", "negro"], 20000000, "portugués", "Brasília");
// console.log(Brasil.countryinfo);




class country {
    #countryName ;
    constructor(name, flagsColors, population, language, capital) {
        this.#countryName = "";
        this.flagsColors = flagsColors;
        this.population = population;
        this.language = language;
        this.capital = capital;
        this,
       
    }
setName(name) {
    this.#countryName = name;
}
getName() {
    return this.#countryName;
}
}
const Argentina = new country( ["celeste", "blanco"], 45000000, "español", "Buenos Aires");
argentina.setName("Argentina");
console.log(Argentina.getName());