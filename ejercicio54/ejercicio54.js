// 54. Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él
//     segundo, en caso contrario indicar con un mensaje que la operación no es posible
//     realizarla.

let primerNumero = parseInt(prompt('Ingrese el primer numero'));
let segundoNumero = parseInt(prompt('Ingrese el segundo numero'));

if (primerNumero > segundoNumero)alert(primerNumero -segundoNumero);
    else alert('No es posible realizar la operacion');