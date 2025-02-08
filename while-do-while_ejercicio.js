// Listar las peliculas y su categoria
// Salida esperada:
/*
    🎭 Drama: El Padrino
    🔥 Acción: Avengers: Endgame
    🎨 Animación: Buscando a Nemo
    🎭 Drama: Pulp Fiction
    🔥 Acción: Gladiador
    🎨 Animación: Toy Story
*/

//arrglo = ["🎭","🔥","🎨"];
//objeto = { "🎭": "Drama", "🔥": "Acción", "🎨": "Animación" };


// arreglos = [0,1,2,3,4,5]

const peliculas = [
    { titulo: "El Padrino", genero: "Drama" },
    { titulo: "Avengers: Endgame", genero: "Acción" },
    { titulo: "Buscando a Nemo", genero: "Animación" },
    { titulo: "Pulp Fiction", genero: "Drama" },
    { titulo: "Gladiador", genero: "Acción" },
    { titulo: "Toy Story", genero: "Animación" },
  ];



  // Ejercicio 1: Buscar pelicula
let busqueda = "Toy Story";


let pelicula = 'Pulp Fiction';
let peliculaencontrada =false;
let contador = 0;

do {
    if (peliculas [contador].titulo === pelicula){
        console.log ('Pelicula ${pelicula}encontada es del genero ${peliculas[contador.genero)}');
        peliculaencontrada=true;

    }
    contador++;

    } while (peliculaencontrada && contador <= peliculas.length);

    if (!peliculaencontrada){
        console.log('Pelicula no encontrada');
    }

    

    


