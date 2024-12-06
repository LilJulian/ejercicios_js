// 6. los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo y el
// nombre, el grupo A está formado por las mujeres con un nombre anterior a la M y los
// hombres con un nombre posterior a la N y el grupo B por el resto, escribir un programa que
// pregunte al usuario su nombre y sexo y muestre por pantalla el grupo al que corresponde

function ejercicio6(params) {
    let nombre = prompt("Ingrese su nombre");
    let genero = prompt("Ingrese el genero");
    if (genero === 'femenino'  && nombre[0].toUpperCase < 'm' || genero === 'masculino' && nombre[0].toUpperCase > 'n' ){
        alert('Pertenece a el grupo a');
    }

}

ejercicio6();