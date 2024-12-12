// 49. Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean
// positivos: área triangulo= lado * lado

let lado = parseInt(prompt('Ingrese el lado del triangulo'));
if (lado > -1) alert(`El area del triangulo es de: ${lado * lado}`);