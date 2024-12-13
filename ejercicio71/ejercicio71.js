// 71. Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un
// número primo o no.

let numero = parseInt(prompt('Ingrese un numero entero'));
let contador = 0;
for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
        contador++;
    }
}if (contador === 2){
    alert('es primo')
}else{
    alert('no es primo');
}