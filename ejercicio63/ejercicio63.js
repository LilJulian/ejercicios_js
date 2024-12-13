// 63. Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los
// años que ha cumplido (desde 1 hasta su edad).

let edad = parseInt(prompt('Ingrese su edad'));
let año = 2024 - edad;
let cont = 1;
for (año; año < 2025; año++){
    console.log(`En el año ${año} tuvo la edad de ${cont++} años`);
}