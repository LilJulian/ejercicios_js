// 59. En un colegio, se necesita hacer una selección de basquetbol que represente al colegio,
// para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19
// años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75.

let edad = parseInt(prompt('Ingrese la edad:'));
let estatura = parseInt(prompt('Ingrese la estatura'));
let peso = parseInt(prompt('Ingrese el peso'));

if (edad <= 19 && estatura > 1.75 && peso > 74 && peso < 81) alert('Aplica para el equipo');
    else alert('No apto');