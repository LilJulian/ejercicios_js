// 32. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un
// 2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada
// producto y el total de la compra.

let producto1 = parseInt(prompt('Ingrese el precio del primer porducto'));
let producto2 = parseInt(prompt('Ingrese el precio del segundo porducto'));
let producto3 = parseInt(prompt('Ingrese el precio del tercer porducto'));
let producto4 = parseInt(prompt('Ingrese el precio del cuarto porducto'));
let producto5 = parseInt(prompt('Ingrese el precio del quinto porducto'));

producto1 = producto1 - (producto1 * 0.05);
producto2 = producto2 - (producto2 * 0.05);
producto4 = producto4 - (producto4 * 0.02);
producto5 = producto5 - (producto5 * 0.02);

let total = producto1 + producto2 + producto3 + producto4 + producto5;
alert('El precio total es de :'+ total);
