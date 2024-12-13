// 61. Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual
// fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos
// obtuvieron las siguientes calificaciones:
// a. «a» = menor que 100 y mayor igual que 90
// b. «b» = menor que 90 y mayor igual que 80
// c. «c» = menor que 80 y mayor igual que 70
// d. «d» = menor que 70 y mayor igual que 60

let alumnos = parseInt(prompt('Ingrese la cantidad de alumnos'));
let notas = [];
let notaMax = 0;

for (i = 0; i < alumnos ; i++ ){
    let nota = parseInt(prompt('Ingrese la nota del alumno'));
    notas.push(nota);   
    if (nota === 100){
        notaMax++;
    }
}
alert(notas);
let maximo = Math.max(...notas);
alert(maximo);
let minimo = Math.min(...notas);
alert(minimo);
alert(notaMax);


