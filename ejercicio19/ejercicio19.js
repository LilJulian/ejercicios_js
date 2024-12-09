// 19. Escribir un programa que calcule el área y el volumen de un cilindro.

let radio = parseInt(prompt('Ingrese el radio del cilindro'));
let altura = parseInt(prompt('Ingrese la altura del ciindro'));
alert(`El area del cilindro es = ${(2* 3.14 * radio * altura) + (2 * 3.14 * Math.pow(radio, 2))}`);
alert(`El volumen del cilindro es = ${3.14 * Math.pow(radio, 2) * altura}`);