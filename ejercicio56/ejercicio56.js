// 56. Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a
// $100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga
// un interés anual de 4%. Al final mostrar el saldo final y el interés pagado.

let saldo = parseInt(prompt('Ingrese el saldo'));

if (saldo < 100000) alert(`El saldo final es de: ${saldo + (saldo * 0.03)} con el interes de 3%`);
    else alert(`El saldo final es de: ${saldo + (saldo * 0.04)} con el interes de 4%`);