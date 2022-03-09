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
            borrar(display)
            break;

        case '=':
            calcular(display)
            break;

        default:
            actualizar(display, button)
            break;    
    }
}

funtion