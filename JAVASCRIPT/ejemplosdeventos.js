const formEl = document.getElementById('form');
const btnContainerEl = document.getElementById('btn-container');
btnContainerEl.addEventListener('click', (e) => {
    if (e.target.tagName === 'button') {
        alert("cliqueaste el botón " + e.target.textContent);
    }
});

formEl.addEventListener('submit', handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    console.log(formEl.elements['btn-number'].value);
    const numberOfButtons = formEl.elements['btn-number'].value;
    const formEl = document.getElementById('form');
const btnContainerEl = document.getElementById('btn-container');
btnContainerEl.addEventListener('click', (e) => {
    if (e.target.tagName === 'button') {
        alert("cliqueaste el botón " + e.target.textContent);
    }
});
formEl.addEventListener('submit', handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    console.log(formEl.elements['btn-number'].value);
    const numberOfButtons = formEl.elements['btn-number'].value;
for (let i = 0; i < numberOfButtons; i++) {
        const button = document.createElement('button');
        if (i === 10) {
            button.setAttribute("class", "re-special");
            button.classList.add('special');
        }
        button.textContent = `Botón ${i + 1}`;
        btnContainerEl.appendChild(button);
    }
}
}