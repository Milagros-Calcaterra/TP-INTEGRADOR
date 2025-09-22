// const user = {
//     firstname: "milagros",
//     lastname: "calcaterra",
//     age: 21,
//     email: "milagroscalcaterra@gmail.com",
// }

// const message = `Hola mi nombre es ${user.firstname} 
// ${user.lastname} y tengo ${user.age} años, correo:
//  ${user.email}  ${4 > 10}`; //esto da falso 
// alert(message);


// const btn = document.querySelector("button");
// console.log(imgSrcAttribute);
// btn.addEventListener("click", hackimg );
// function hackimg() {
// imgElement[0].setAttribute("src", "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png");
// imgElement[0].setAttribute("alt", "google");
// console.log(imgSrcAttribute);
// btn.textContent = "google";
// }


const btncolors = document.getElementsByTagName("button");
const circle = document.querySelector ("div")   
btncolors[0].addEventListener("click", changetored)
btncolors[1].addEventListener("click", changetogreen)

function changetored() {
    if (circle.classList.contains("red")) {
        circle.classList.remove("red");
    
    }}

    function changetogreen() {
        if (circle.classList.contains("green")) {
            circle.classList.remove("green");
        }
    }
