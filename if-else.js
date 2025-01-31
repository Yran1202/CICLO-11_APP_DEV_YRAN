const pi = 3.1416 
let r = 12

let circunferencia = pi * (r*r)

console.log (circunferencia)


// Ejercicio 1: Edad mÃ­nima para votar

// Escribe un programa que se le asigne un valor a una varibale "edad" y verifique si puede votar 
// (la edad mÃ­nima para votar es 18 aÃ±os).
// Si es mayor o igual a 18, imprime

// "Puedes votar"
// de lo contrario, imprime

// "No puedes votar".

let edad = 17
 
if ( edad >= 18 ) 
    {
        console.log ("Puedes votar")
    }
else {
    console.log ("No puedes votar")
}

// Ejercicio 2: NÃºmero positivo o negativo
// Escribe un programa que se le asigne un valor a una varibale "numero" y verifique si es positivo, negativo o cero.

let numero = 0;
 
if (numero > 0 ){

    console.log("Es positivo")

}else if(numero<0){

    console.log("Es negativo")

}else{

  console.log("Es cero ")

}

// Ejercicio 3: Comparar dos nÃºmeros
// Escribe un programa que se le asigne un valor a dos varibales y determine cuÃ¡l es mayor, menor o si son iguales.

let variableA = 1
let variableB = 10000
 
if (variableA < variableB) 
{
        console.log(variableA + " es menor que " + variableB)
} else if (variableA > variableB) 
    {
        console.log(variableA + " es mayor que " + variableB)
    }
else {
    console.log (variableA + " es igual que " + variableB)
}

// Ejercicio 4: NÃºmero par o impar
// Escribe un programa que se le asigne un valor a una varibale y verifique si es par o impar.

// NOTA> Estudia el uso de % en JS

// Visita Operador Residio

let numeroParInpar = 25;
let division = numeroParInpar % 2;
 
if (division === 0) {
  console.log('El nÃºmero '+numeroParInpar+ ' es par');
} else {
  console.log('El nÃºmero '+numeroParInpar+ ' es impar');
}

// Ejercicio 5: Calificaciones
// Escribe un programa que se le asigne un valor a una varibale "calificaciÃ³n" numÃ©rica (del 0 al 100) y muestre el nivel de acuerdo a la siguiente escala:

// 90-100: Excelente
// 70-89: Bueno
// 50-69: Suficiente
// 0-49: Insuficiente

let calificacion = 49
 
if (calificacion>89) 
    {
        console.log("Excelente")
    }
else if (calificacion>69 && calificacion<90) 
    {
        console.log("Bueno")
    }
else if (calificacion>49 && calificacion<70) 
    {
        console.log("Suficiente")
    }
else 
    {
        console.log ("Insuficiente")
    }


 calificacion = 50;
 
 if ( calificacion <= 100 && calificacion>=90){
      console.log("Excelente")
    }else if ( calificacion <= 89 && calificacion>=70){
      console.log("Bueno")
    }else if ( calificacion <= 69 && calificacion>=50){
      console.log("Suficiente")
    }else if ( calificacion <= 49 && calificacion>=0){
      console.log("Insuficiente")
    }else{
      console.log("Fuera de rango")
    }

// Ejercicio 6: VerificaciÃ³n de contraseÃ±a
// Escribe un programa que se le asigne un valor a una varibale de contraseÃ±a al 
// usuario y verifique si es correcta (la contraseÃ±a correcta es "admin123").

// Si es correcta, muestra "Acceso concedido"
// Si no, "Acceso denegado".


console.log('************Ejercicio 5: Calificaciones *************\n');

let contra = "admin123"
 
if(contra==="admin123")
    {
        console.log("acceso concedido")
    }
else{
  console.log("Acceso denegado ");
}

// Ejercicio 7: Verificar si un nÃºmero estÃ¡ en un rango
// Escribe un programa que se le asigne un valor a una varibale numerica y verifique si estÃ¡ entre 10 y 20 (inclusive).

console.log('************Ejercicio 7: Verificar si un nÃºmero estÃ¡ en un rango*************\n');

let rangoNum = 1;
 
if (rangoNum >= 10 && rangoNum <= 20) {
  console.log("El numero "+rangoNum+" EstÃ¡ entre 10 y 20");
} else 
  console.log("El numero "+rangoNum+" No estÃ¡ entre 10 y 20");

  // Ejercicio 8: Mayor de tres nÃºmeros
// Escribe un programa que se le asigne un valor a tres nÃºmeros y determine cuÃ¡l es el mayor.


console.log('************Ejercicio 8: Mayor de tres nÃºmeros*************\n');

let num1 = 6;
let num2 = 9;
let num3 = 100;
 
if (num1 > num2){

    if(num1 > num3){
      console.log("El nÃºmero mayor es num1")
    }else{
      console.log("El nÃºmero mayor es num3")
    }

}else if(num2 > num3){
  
    console.log("El nÃºmero mayo es num2")

}else{
  
    console.log("El nÃºmero mayor es num3")

}

// Ejercicio 9: Verificar si una cadena estÃ¡ vacÃ­a
// Escribe un programa que se le asigne un valor de texto y verifique si la cadena estÃ¡ vacÃ­a o no.

console.log('************Ejercicio 9: Verificar si una cadena estÃ¡ vacÃ­a*************\n');


let cadena="";
 
if(cadena.length===0){
 
  console.log("Cadena vacÃ­a")
}else{
 
  console.log("Cadena NO vacÃ­a")
}

// Ejercicio 10: Determinar el dÃ­a de la semana
// Escribe un programa que se le asigne un valor numerico del 1 al 7 al usuario y muestre quÃ© dÃ­a de la semana corresponde (1 para lunes, 2 para martes, etc.).


console.log('************Ejercicio 10: Determinar el dÃ­a de la semana*************\n');

let diaSemana = 10
 
if (diaSemana === 1) {console.log ("Lunes")}
  else if (diaSemana === 2) {console.log ("Martes")}
  else if (diaSemana === 3) {console.log ("MiÃ©rcoles")}
  else if (diaSemana === 4) {console.log ("Jueves")}
  else if (diaSemana === 5) {console.log ("Viernes")}
  else if (diaSemana === 6) {console.log ("SÃ¡bado")}
  else if (diaSemana === 7) {console.log ("Domingo")}
  else {console.log ("No vÃ¡lido")}

  

  