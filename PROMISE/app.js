// const { getgid, title } = require("process");

// const { get } = require("http");

// // function getData() {
//     const statusOk = false;
//     if (statusOk) return "todo bien";
//     else throw new Error("error");
// }


// function getproductsFromDB() {
//     setTimeout(() => { return [{id: 1, title: "breaking bad", price: 100} 
//         , {id: 2, title: "the walking dead", price: 100}
//         , {id: 3, title: "the witcher", price: 100}

//     ] }, 1000);
// }

// const result = getproductsFromDB();
// console.log(result);

// // es un problema a resolver con promesas 
// //el problema es que al no usar promesas la informacion llega tarde
// // try {
// //     getData();


// // } catch (error) {
// //     console.error ("esto es un error terrible")
// // };


// function getAsyncData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const statusOk = true;
//             const tvshows = [{id: 1, title: "breaking bad", price: 100} 
//                 , {id: 2, title: "the walking dead", price: 100}
//                 , {id: 3, title: "the witcher", price: 100}
//             ];
//             if (statusOk) resolve(tvshows);
//             else reject(new Error("errorrrrrrrrr"));
//         }, 5000);
//     });
// }

// let result = [];
// getAsyncData()
// .then(data => {
//     console.log ("todo slaio bien");
//      result = data;
//      for(const show of result){
//          console.log(show.title);
//      }
// })
// .catch(error => console.error ("errorrr"));
// console.log ("continuamos con el resultado");

const userlist = document.getElementById("users-list");

fetch ("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(data => {
    console.log (data);
    renderusers(data);
})
.catch (error => console.error(error));

function renderusers(users){
    const userdiv = document.createElement("p");
   userdiv.textContent = user.name;
   userlist.appendChild(userdiv);
}