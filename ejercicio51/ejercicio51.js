// 51. Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
// los $130.000 el descuento será del 15%, de lo contrario no hay descuento.

let pagos = parseInt(prompt('Ingrese la cantidad de pagos'));
let total = 0;
let precios = 0;
for (let i = 0; i < pagos; i++) {
    precios = parseInt(prompt('Ingrese el precio del plato'));
    total += precios;
}

if (total > 130000) alert(`se le hara un descuento del 15%. debe pagar ${total - (total * 0.15)}`);
    else alert('Debe pagar '+ total);