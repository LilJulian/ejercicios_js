// 65. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// la cuenta atrás desde ese número hasta cero separados por comas.

let numero = parseInt(prompt('Ingrese el numero:'));
let lista = []

for (numero; numero > 0 ; numero--) {
    if (numero % 2 !== 0){
        lista.push(numero);
    }
}
console.log(lista);