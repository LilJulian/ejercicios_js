// 6. los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo y el
// nombre, el grupo A está formado por las mujeres con un nombre anterior a la M y los
// hombres con un nombre posterior a la N y el grupo B por el resto, escribir un programa que
// pregunte al usuario su nombre y sexo y muestre por pantalla el grupo al que corresponde

function ejercicio6() {
    let nombre = prompt("Ingrese su nombre");
    let genero = prompt("Ingrese (m) si es masculino, (f) si es femenino el genero");
    if (genero.toLowerCase() === 'f'  && nombre[0].toLowerCase() < 'm' || genero.toLowerCase() === 'm' && nombre[0].toLowerCase() > 'n' ){
        alert('Pertenece a el grupo a');
    }if (genero.toLowerCase() === 'f' && nombre[0].toLowerCase() >= 'm' || genero.toLowerCase() === 'm' && nombre[0].toLowerCase() <= 'n'){ 
        alert('Pertenece a el grupo B')
    }else alert('Usuario no reconocido');
}

ejercicio6();