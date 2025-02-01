
// Arreglos 
// Lista de objetos o valores
const edades = [15,17,33,28,40,50,14,10,25  ];

console.log(edades.length);

for (let i = 0; i < edades.length; i++) {
    console.log(edades[i]);

    if(edades[i]>=18){
         console.log('Es mayor de edad');    
     } else
     {
         console.log('Es menor de edad');
    }
}

//Dado un arreglo de numeros, calcular la suma de todos los numeros positivos.
// numeros = [-2,-3,-7, 10, 5, -8, 0, 10, -10, 20, 30, -40, 50]

let numero = [-2,-3,-7, 10, 5, -8, 0, 10, -10, 20, 30, -40, 50]
let suma = 0
 
for(i=0;i<numero.length;i++){

    if(numero[i]>0)
        suma = suma + numero[i]
}
 
console.log("la suma total de numeros positivos es: "+ suma);


//imprimir emoicones
console.log(`🎭 🔥 🎨`);

const peliculas = [
    { titulo: "El Padrino", genero: "Drama" },
    { titulo: "Avengers: Endgame", genero: "Acción" },
    { titulo: "Buscando a Nemo", genero: "Animación" },
    { titulo: "Pulp Fiction", genero: "Drama" },
    { titulo: "Gladiador", genero: "Acción" },
    { titulo: "Toy Story", genero: "Animación" },
  ];

  console.log(peliculas.length);
  console.log(`🎨 Animación: ${peliculas[5].titulo} - ${peliculas[5].genero}`);


//Ejercicio 1:  Listar las peliculas y su categoria
// Salida esperada:
/*
    🎭 Drama: El Padrino
    🔥 Acción: Avengers: Endgame
    🎨 Animación: Buscando a Nemo
    🎭 Drama: Pulp Fiction
    🔥 Acción: Gladiador
    🎨 Animación: Toy Story
*/

for (let i = 0; i <peliculas .lenght  ; i++) {
    console.log($peliculas[i].genero + " :  " + peliculas[i] .categoria)

}


// Ejercicio 2: Filtrar la pelicula por busqueda

for (let i = 0 ; i < peliculas.length; i++) {
    if (peliculas[i].titulo === "Toy Story") {
        console.log(peliculas[i].titulo + "es ua pelicula de animacion")

    }
    else{
        console.log("No se encontro la pelicula") }
}


// Tip: let busqueda = "Toy Story";


// Ejercicio 3: Cuantas peliculas hay por genero.

for (let i = 0; i < peliculas.length; i++) {
    console.log(peliculas[i].genero);
}




