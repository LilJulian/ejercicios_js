// 48. Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica
// desea calcular "Triángulo y Círculo: (Escriba T o C):
// a. Triangulo = base * altura / 2
// b. Circulo = PI * radio* radio

let pregunta = prompt('Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica desea calcular "Triángulo y Círculo: (Escriba T o C):')

if (pregunta.toUpperCase() == 'T'){
    let base = parseInt(prompt('Ingrese la base del triangulo'));
    let altura = parseInt(prompt('Ingrese la altura del triangulo'));
    alert(`El area del triangulo es ${(base * altura) / 2}`);
}else if (pregunta.toUpperCase() === 'C'){
    let radio = parseInt(prompt('Ingrese el radrio del circulo'));
    alert(`El area del circulo es ${3.14 * radio**2}`);
}