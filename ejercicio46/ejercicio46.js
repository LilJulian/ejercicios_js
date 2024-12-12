// 46. Calcule el mayor de tres números, permitiendo leer 3 valores diferentes.

let num1 = parseInt(prompt('Ingrese un numero:'));
let num2 = parseInt(prompt('Ingrese un numero:'));
let num3 = parseInt(prompt('Ingrese un numero:'));

if (num1 > num2 && num1 > num3) {
    alert('el numero ' + num1 + ' es el mayor');
}else if (num2 > num1 && num2 > num3){
    alert('el numero ' + num2 + ' es el mayor');
}else if (num3 > num1 && num3 > num2){
    alert('el numero ' + num3 + ' es el mayor');
}