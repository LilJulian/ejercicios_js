// escribir un programa que almacene la cadena de caracteres contraseña de una
// variable, pregunte al usuario por la contraseña e imprima por pantalla si la contraseña
// introducida por el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y
// minúsculas, se debe validar que solo se pueda ingresar valores alfanuméricos.



function ejercicio2() {
    let variable = "contraseña123";
    let usuario = prompt("Ingrese la contraseña");
    let vali = /\w/;
    console.log(vali.test(usuario));
    if (vali.test(usuario)){
        if(usuario.toLowerCase() === variable.toLowerCase()) {
            alert("coincide");
        }else alert("no coincide");
    }else alert("MAL");
        
}

ejercicio2();