// 33. Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos.

let edadHijo = parseInt(prompt('Ingrese la edad del hijo: '));
let edadMadre = parseInt(prompt('Ingrese la edad de la madre actual: '));

alert(`La edad de una madre en el momento que dio a luz es de : ${edadMadre - edadHijo}`);