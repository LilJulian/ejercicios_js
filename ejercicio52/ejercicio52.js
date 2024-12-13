// 52. En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es
// de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora
// trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de
// horas trabajadas.

let tipoEmpleado = prompt('Ingrese el tipo de empleado');

if (tipoEmpleado.toLowerCase() == 'administrativo'){
    let horas = parseInt(prompt('Ingrese las horas trabajadas'));
    alert(`Su pago total es de ${horas * 10000}`);
}if (tipoEmpleado.toLowerCase() == 'planta'){
    let horas = parseInt(prompt('Ingrese las horas trabajadas'));
    alert(`Su pago total es de ${horas * 20000}`);
}