// import './styles.css';
// document.getElementById("app").innerHTML = `
// <h1>Hello World</h1> `;

// const user = {
//   id: 1,
//   name: "milagros",
//   age: 30,
//   email: "milagros@gmail.com",
//   active: true,
// };

// // const serializedUser = JSON.stringify(user);
// // console.log(typeof serializedUser);
// // console.log ( typeof user);

// window.localStorage.setItem("user", user);
// const storedUser = JSON.parse (window.localStorage.getItem ("user"));
// window.localStorage.clear();

// if (storedUser) {
//   console.log("hola");
// }
// else {
//   console.log("no");
// }

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = {
    id: 1,
    name: form.name.value,
    age: form.age.value,
    email: form.email.value,
    active: form.active.checked,
  };
  window.localStorage.setItem("user", JSON.stringify(user));
  console.log(user);
});