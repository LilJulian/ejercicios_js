// 22. Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada
// minuto cuesta $355 pesos y un IVA 20%.

    minutos = parseInt(prompt('Ingrese los minutos que duro la llamada: '));
    let precio = minutos * 355
    let iva = precio + (precio * 0.20);
    alert(`El costo de la llamada es de ${iva}`);
