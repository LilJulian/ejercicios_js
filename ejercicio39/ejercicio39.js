// 39. Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura
// Considere que se cobra por m2 y realice el código que representen el algoritmo que le
// permita ir generando presupuestos para cada cliente.

let ancho = parseInt(prompt('Ingrese el ancho de la pintura:'));
let longitud = parseInt(prompt('Ingrese la longitud de la pintura:'));

let metro = ancho * longitud;

alert('Se le cobraran ' + metro + ' m2');
