// 53. Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados
// de: Iva, Subtotal y Total de la compra de los artículos


let producto = 0;
let iva = 0;
let total = 0;
for (i = 0; i < 5; i++){
    producto = parseInt(prompt('Ingrese el precio del producto'));
    iva = parseInt(prompt('Ingrese el iva del producto'));
    let desc = producto - (producto * iva);
    total += desc;
}

alert(total);