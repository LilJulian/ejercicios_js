// 70. Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
// pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.

let contraseña = 'contraseña';
let usuario;

do {
    usuario = prompt('Ingrese la contraseña');
    if (usuario !== contraseña){
        console.log('intentelo de nuevo');
    }else alert('contraseña correcta');
    
} while (usuario !== contraseña);