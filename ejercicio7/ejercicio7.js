// 7. los tramos impositivos para la declaración de la renta en un determinado país son:
// a. entre 10000 y 20000 ---- 5%
// b. entre 20000 y 35000 ---- 10%
// c. entre 35000 y 60000 ---- 20%
// d. más de 60000 ---- 45%
// escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el tipo
// de impositivo que le corresponde.

function ejercicio7() {
    let tramos = parseInt(prompt('Ingrese su renta anual'));
    if (tramos >= 10000 && tramos <= 20000) {
        alert('Le pertenece el 5% del impositivo');
    } if (tramos > 20000 && tramos <= 35000){
        alert('Le pertenece el 10% del impositivo');
    } if (tramos > 35000 && tramos <= 60000) {
        alert('Le pertenece el 20% del impositivo');
    } if (tramos > 60000) {
        alert('Le pertenece el 45% del impositivo')
    }else {
        alert('No aplica');
    }
}   

ejercicio7();