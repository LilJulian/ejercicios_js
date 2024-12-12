// 42. Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550. Calcular el
// monto total de la venta, según la cantidad de artículos solicitados durante el día

let libro = parseInt(prompt('Ingrese la cantidad de libros a pedir'));
let cuaderno = parseInt(prompt('Ingrese la cantidad de cadernos a pedir'));
let lapiceros = parseInt(prompt('Ingrese la cantidad de lapiceros a pedir'));

libro = libro * 10000;
cuaderno = cuaderno * 7550;
lapiceros = lapiceros * 5550;

let total = libro + cuaderno + lapiceros;

alert('debe pagar '+total);