// 10. La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los
// ingredientes para cada tipo de pizza aparecen a continuación.
// a. Ingredientes vegetarianos: Pimiento y tofu.
// b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
// Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en
// función de su respuesta le muestre un menú con los ingredientes disponibles para que
// elija. Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están
// en todas las pizzas. Al final se debe mostrar por pantalla si la pizza elegida es vegetariana
// o no y todos los ingredientes que lleva.

function ejercicio10() {
    let tipo = prompt('Desea pizza vegetariana? (si) o (no)?');
    if (tipo.toLowerCase() == 'si') {
        let ingre = prompt('Ingredientes vegetarianos: Pimiento y tofu. Elija un ingrediente por favor:')
        if (ingre.toLowerCase() == 'pimiento'){
            alert(` Pizza elegida: Vegetariana
                Ingredientes: mozzarella, tomate y ${ingre}`);
        }if (ingre.toLowerCase() == 'tofu'){
            alert(` Pizza elegida: Vegetariana
                Ingredientes: mozzarella, tomate y ${ingre}`);
        }else{
            alert('Ingrediente invalido')
        }
    }if (tipo.toLowerCase() == 'no') {
        let ingre = prompt('Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.')
        if (ingre.toLowerCase() == 'pepperoni'){
            alert(` Pizza elegida: No vegetariana
                Ingredientes: mozzarella, tomate y ${ingre}`);
        }if (ingre.toLowerCase() == 'jamon'){
            alert(` Pizza elegida: No vegetariana
                Ingredientes: mozzarella, tomate y ${ingre}`);
        }if (ingre.toLowerCase() == 'salmon'){
            alert(` Pizza elegida: No vegetariana
                Ingredientes: mozzarella, tomate y ${ingre}`);
        }else{
            alert('Ingrediente invalido')
        }
    }else{
        alert('Por favor elija');
    }
}

ejercicio10();