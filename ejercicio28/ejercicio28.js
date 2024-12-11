// 28. Calcular el sueldo de un empleado dados como datos de entrada:
// a. Nombre.
// b. horas de trabajo.
// c. pago en hora

let nombre = prompt('Ingrese el nombre del empleado: ');
let horas = parseInt(prompt('horas trabajadas: '));
let pago = parseInt(prompt('Ingrese el pago por hora: '));

alert(`El empleado ${nombre} trabajo ${horas} horas y su sueldo es de ${pago * horas}`)