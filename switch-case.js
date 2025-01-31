let expresion = 2


switch (expresion) {
    case 1:
        console.log ('es 1')
        break;
        case 2:
        console.log ('es2')
        break;
        default:
            console.log('Es default')
}

//Usando swich case para evaluar el color de una fruta
//Si la fruta es Manzana, pera, platano, imprimir "El color de la fruta es amarillo o verde"
//Si la fruta es Fresa, mandarina, naranja, imprimir "El color de la fruta es rojo o anaranjado"
// un valor de salida por default "Fruta no encontrada"

let fruta = "naranja";

switch (fruta) {
    case "manzana":
    case "pera":
    case "plÃ¡tano":
        console.log("El color de la fruta es amarillo o verde");
        break;
    case "fresa":
    case "mandarina":
    case "naranja":
        console.log("El color de la fruta es rojo o anaranjado");
        break;
    default:
        console.log("Fruta no encontrada");
}



fruta = 'Naranja';

switch (fruta) {
    case 'Manzana':
    case 'Pera':
    case 'Platano':
        console.log("la " + fruta + " es de color Amarillo o verde");
        break;
    case 'Fresa':
    case 'Mandarina':
    case 'Naranja':
        console.log("el " + fruta + " es de color Rojo o Anaranjado");
        break;
    default:
        console.log("Fruta no encontrada");
}

//Ejercicio 1: DÃ­as de la semana 
//Escribe un programa que reciba un nÃºmero del 1 al 7 y devuelva el dÃ­a de la semana con base en el nÃºmero.

let dia =1;
switch(dia){
    case 1:
        console.log('Lunes');
        break;
        case 2:
            console.log('Martes');
            break;
        case 3:
            console.log('Miercoles');
            break;
        case 4:
            console.log('Jueves');
            break;
        case 5:
            console.log('Viernes');
            break;
        case 6:
            console.log('Sabado');
            break;
        case 7: 
        console.log('Domingo');
        break;
        default:
            console.log('NÃºmero invÃ¡lido');     
}

/**
Escribe un programa que reciba una letra (A, B, C, D, F) y devuelva la calificaciÃ³n correspondiente. Donde A es la mas alta y F es reprobado, 
Si recibe otra entrada enviar mensaje "CalificaciÃ³n invÃ¡lida"
Ejemplo: Recibe A, debe de imprimir "Excelente"
*/

let calificacion = 'D';
switch (calificacion) {
    case 'A':
        console.log("Excelente");
        break;
    case 'B':
        console.log("Bueno");
        break;
    case 'C':
        console.log("Regular");
        break;
    case 'D':
        console.log("Deficiente");
        break;
    case 'F':
        console.log("Reprobado");
        break;
    default:
        console.log("CalificaciÃ³n invÃ¡lida");
}

/**
Ejercicio 3: Meses del aÃ±o

Escribe un programa que reciba un nÃºmero del 1 al 12 y devuelva el mes correspondiente.
Si recibe otra entrada enviar mensaje "NÃºmero invÃ¡lido"

*/

let mes = 2;
switch (mes) {
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break;
    case 6:
        console.log("Junio");
        break;
    case 7:
        console.log("Julio");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Septiembre");
        break;
    case 10:
        console.log("Octubre");
        break;
    case 11:
        console.log("Noviembre");
        break;
    case 12:
        console.log("Diciembre");
        break;
    default:
        console.log("NÃºmero invÃ¡lido");
}

/**
## Ejercicio 4: Colores del semÃ¡foro

Escribe un programa que reciba un color (rojo, amarillo, verde) 
y devuelva la acciÃ³n correspondiente.
Si recibe otra entrada enviar mensaje "Color invÃ¡lido"
 */

let color = 'rojo';
switch (color) {
    case 'rojo':
        console.log("Alto");
        break;
    case 'amarillo':
        console.log("PrecauciÃ³n");
        break;
    case 'verde':
        console.log("Siga");
        break;
    default:
        console.log("Color invÃ¡lido");
}

/** 
Escribe un programa que reciba el nÃºmero de lados iguales de un triÃ¡ngulo (0, 2, 3) y devuelva el tipo de triÃ¡ngulo.
Si recibe otra entrada enviar mensaje "NÃºmero invÃ¡lido"
*/

let ladosIguales = 1;
switch (ladosIguales) {
    case 0:
        console.log("Escaleno");
        break;
    case 2:
        console.log("IsÃ³sceles");
        break;
    case 3:
        console.log("EquilÃ¡tero");
        break;
    default:
        console.log("NÃºmero invÃ¡lido");
}

/**
Ejercicio 6: Estaciones del aÃ±o

Escribe un programa que reciba un nÃºmero del 1 al 4 y devuelva la estaciÃ³n del aÃ±o correspondiente.
Si recibe otra entrada enviar mensaje "NÃºmero invÃ¡lido"
*/

let estacion = 1;
switch (estacion) {
    case 1:
        console.log("Primavera");
        break;
    case 2:
        console.log("Verano");
        break;
    case 3:
        console.log("OtoÃ±o");
        break;
    case 4:
        console.log("Invierno");
        break;
    default:
        console.log("NÃºmero invÃ¡lido");
}

/**
Ejercicio 7: Tipos de vehÃ­culos

Escribe un programa que reciba un tipo de vehÃ­culo (coche, moto, bicicleta) y devuelva el nÃºmero de ruedas.
Si recibe otra entrada enviar mensaje "VehÃ­culo invÃ¡lido"
*/

let vehiculo = 'coche';
switch (vehiculo) {
    case 'coche':
        console.log("4 ruedas");
        break;
    case 'moto':
        console.log("2 ruedas");
        break;
    case 'bicicleta':
        console.log("2 ruedas");
        break;
    default:
        console.log("VehÃ­culo invÃ¡lido");
}

/**
Ejercicio 8: Niveles de usuario

Escribe un programa que reciba un nivel de usuario (admin, editor, visitante) y devuelva los permisos correspondientes.
Si recibe otra entrada enviar mensaje "Nivel de usuario invÃ¡lido"
*/

let nivelUsuario = 'admin';
switch (nivelUsuario) {
    case 'admin':
        console.log("Todos los permisos");
        break;
    case 'editor':
        console.log("Permisos de ediciÃ³n");
        break;
    case 'visitante':
        console.log("Permisos de lectura");
        break;
    default:
        console.log("Nivel de usuario invÃ¡lido");
}

/**
Ejercicio 9: Tipos de frutas

Escribe un programa que reciba una fruta (manzana, plÃ¡tano, naranja) y devuelva su color.
Si recibe otra entrada enviar mensaje "Fruta invÃ¡lida"
*/
let = 'naranja';
switch (fruta) {
    case 'manzana':
        console.log("Rojo o verde");
        break;
    case 'plÃ¡tano':
        console.log("Amarillo");
        break;
    case 'naranja':
        console.log("Naranja");
        break;
    default:
        console.log("Fruta invÃ¡lida");
}

/**
Ejercicio 10: Tipos de clima

Escribe un programa que reciba un tipo de clima (soleado, lluvioso, nublado) 
y devuelva una recomendaciÃ³n.
*/

let clima = 'nublado';
switch (clima) {
    case 'soleado':
        console.log("Usa protector solar");
        break;
    case 'lluvioso':
        console.log("Lleva un paraguas");
        break;
    case 'nublado':
        console.log("Puede que necesites una chamarra");
        break;
    default:
        console.log("Clima invÃ¡lido");
}


