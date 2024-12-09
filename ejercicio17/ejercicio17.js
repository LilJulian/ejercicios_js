// Escribir un programa que calcule el volumen de una esfera.

let diametro = parseInt(prompt('Ingrese el diametro de la esfera: '));
alert(`El volumen de la esfera es de ${(4/3) * 3.14 * Math.pow((diametro/2), 3)}`);