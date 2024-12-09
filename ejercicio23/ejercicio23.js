// 23. Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil
// expresada en kilómetros por hora, proporcione la velocidad en metros por segundo.

let km = parseInt(prompt('Ingrese los kilometros del auto'));
let hora = parseInt(prompt('Ingrese las horas que duro'));
alert(`La velocidad es de : ${km / hora}  ${km * 1000} metros / ${hora * 60} minutos`)