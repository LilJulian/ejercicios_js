// Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor o
// menor de edad, el programa debe validar que solo se puedan ingresar números positivos.

function ejercicio1(edad) {
    edad = prompt("Ingrese su edad");
    let vali = /^[0-9].$/;
    if (vali.test(edad) === true){
        if (edad >= 18){
            alert("Es mayor de edad");
        }if (edad < 18) {
            alert("Es menor de edad");
        }
    }
}

ejercicio1();