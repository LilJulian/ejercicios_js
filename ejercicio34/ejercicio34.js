// 34. Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
// depósito.
// a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
// b. Volumen = PI *(radio^2)* H (altura del depósito).
// El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo
// en segundos.

let radio = parseInt(prompt('Ingrese el radio'));
let tiempo = parseInt(prompt('Ingrese los minutos'));
tiempo = tiempo * 60;
let altura = parseInt(prompt('Ingrese la altura'));

let volumen = 3.14 * radio**2 * altura;
let caudal = volumen / tiempo;

alert('El caudal es de: '+ caudal);