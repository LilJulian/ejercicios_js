// 5. Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
// ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte al
// usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe tributar o
// no

function ejercicio5(){
    let ingreso_total = 0;
    let edad = parseInt(prompt("Ingrese su edad"));
    if (edad > 16){
        let ingresos = parseInt(prompt("Ingrese la cantidad de ingresos"));
        for (let i = 1; i <= ingresos; i++) {
            let ingreso_mensual = parseInt(prompt("Ingrese la cantidad del ingreso")); 
            ingreso_total += ingreso_mensual;
        }
        if (ingreso_total >= 1000) alert("Debe tributar");
            else alert("No debe tributar");
    }else alert("No debe tributar");
}

ejercicio5();