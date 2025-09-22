// longitud de un arreglo: numero de elementos que contiene el arreglo
// indice: identificador unico para cada elemento del arreglo - comienza en 0
//convencion ZBI (Zero Based Indexing) 
//el . es una propiedad 
//cuando no sabes cuantos indices hay poner: mi array[ miAarray.length - 1] me va a decir la posicion del ultimo elemento
//para cambiar la variable se le asigna un nuevo valor ej : let name = "milagro"
//name= sofia
//let miArray = [1,2,3,4,5]
//miArray [3] = miArray[3] + 1 = 5 para cambiar el valor de miArray[3] 
//metodos de arreglos

const miArray = [1,2,3,4,5] 
miArray[miArray.length] = 90;
console.log(miArray);
miArray.push(91); //push es agregar un elemento al final
console.log(miArray);
miArray.pop(); //pop es borrar el ultimo elemento
console.log(miArray);
miArray.slice(2,4); //slice es extraer un arreglo
console.log(miArray);
miArray.splice(2,1); //splice es borrar un elemento
console.log(miArray);
miArray.unshift(0); //unshift es agregar un elemento al principio
console.log(miArray);
miArray.join(); //join es unir todos los elementos en un solo string
console.log(miArray);
