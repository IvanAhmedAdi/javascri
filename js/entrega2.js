function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
        case "-":
            return primerNumero - segundoNumero;
        case "*":
            return primerNumero * segundoNumero;
        case "/":
            return primerNumero / segundoNumero;
        default:
            return 0;
    }
}
 let numero1 = parseInt(prompt("Ingrese el primer numero para calcular"))
 let numero2 = parseInt(prompt("Ingrese el Segundo numero para calcular"))
 let operacion = prompt("Seleccione entre suma(+), resta (-) multiplicacion(*) o division (/)")
  alert(calculadora(numero1, numero2, operacion));
let resultado = suma(2,3)

console.log(resultado)

