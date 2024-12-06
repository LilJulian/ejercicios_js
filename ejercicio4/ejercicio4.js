// 4. Escribir un programa que pida al usuario un número entero y muestre por pantalla si es par
// o impar.

function ejercicio4(numero) {
    numero = parseInt(prompt("Ingrese un numero entero"));
    if(Number.isInteger(numero)){
        if(numero % 2 === 0){
            alert(`EL numero ${numero} es par`);
        }if(numero % 2 !== 0){
            alert(`EL numero ${numero} es impar`);
        }
    }   
}

ejercicio4();
