// 58. Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo
// zodiacal pertenece, para ello usar if_else anidados.

let mes = prompt('Ingrese el mes');

if (mes.toUpperCase() == 'enero') alert('Su signo es : capricornio');
    else if  (mes.toUpperCase() == 'febrero') alert('Su signo es : acuario');
        else if    (mes.toUpperCase() == 'marzo') alert('Su signo es : piscis');
            else if    (mes.toUpperCase() == 'abril') alert('Su signo es : aries');
                else if    (mes.toUpperCase() == 'mayo') alert('Su signo es : tauro');
                    else if    (mes.toUpperCase() == 'junio') alert('Su signo es : geminis');
                        else if    (mes.toUpperCase() == 'julio') alert('Su signo es : cancer');
                            else if    (mes.toUpperCase() == 'agosto') alert('Su signo es : leo');
                                else if    (mes.toUpperCase() == 'septiembre') alert('Su signo es : virgo');
                                    else if    (mes.toUpperCase() == 'octubre') alert('Su signo es : libra');
                                        else if    (mes.toUpperCase() == 'noviembre') alert('Su signo es : escorpio');
                                            else if    (mes.toUpperCase() == 'diciembre') alert('Su signo es : sagitario');
                                                else alert('Mes desconocido');