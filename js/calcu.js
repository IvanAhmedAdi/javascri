/*
lst = [{
    name: "Watermaster",
    age: 26
},{
    name: "Ivan",
    age: 26

}];

localStorage.setItem("list",JSON.stringify(lst));*/

lst = JSON.parse(localStorage.getItem("list")); 

lst.forEach(element => {
    let elements = document.getElementById("elements");
    let div = document.createElement("div");
    div.innerHTML = element.name + " "+ element.age;
    elements.appendChild(div);
});





var elemento = document.createElement("h2");
var contenido = document.createTextNode("CALCULADORA");
elemento.appendChild(contenido);
elemento.setAttribute("align", "center");
document.body.appendChild(elemento);



window.addEventListener('load',()=>{
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');

    const keypadButtonsArray = Array.from(keypadButtons);
    keypadButtonsArray.forEach( (button)=>{
        button.addEventListener('click',()=>{
            calculadora(button, display)
        })
    })


});

function calculadora(button, display){
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;

        case '=':
            calcular(display);
            break;

        default:
            actualizar(display, button);
            break;    
    }
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML)
}

function actualizar(display, button){
    if (display.innerHTML == 0){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function borrar(display) {
    display.innerHTML = 0;
}

