// 25. Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa
// que ingresando el costo de los medicamentos calcule el descuento y el precio final


let cantidad = parseInt(prompt('Ingrese la cantidad de medicamentos: '));
let suma = 0;
for (let i = 0; i < cantidad; i++) {
    let costo = parseInt(prompt('Ingrese el costo del medicamento:'))  
    suma += costo;
}
alert(`El costo de los medicamento es de ${suma} y con el 10% de descuento queda en: ${suma - (suma *0.10)}`);
