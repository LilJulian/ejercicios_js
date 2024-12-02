// Escribir un programa que pida al usuario dos números y muestre por pantalla su división,
// si el divisor es cero el programa debe mostrar un error, se debe manejar mediante
// excepciones y el mensaje debe ser personalizado.

function ejercicio3(a, b) {
    // a = parseInt(prompt("Ingrese el dividendo"));
    // b = parseInt(prompt("Ingrese el divisor"));
    try {
        let divi = a / b;
        alert(`${a} / ${b} = ${divi}`)
        
    } catch (error) {
        }
        
    }
}

ejercicio3(4, 0);

