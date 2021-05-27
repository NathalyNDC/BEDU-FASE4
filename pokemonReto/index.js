const express = require("express");
const pokemonData = require("./poke.json");

let ultimoID = 4;

const app = express();
app.use(express.json());

app.get("/", function (request, response) {
  response.end("API Pokemon");
});

//1. Obtener todas las peliculas  1. Obtener la lista de los NOMBRES y ID de los entrenadores
app.get("/obtenerEntrenador", function (request, response) {
    const info = pokemonData.map((poke) =>
      poke.id+" "+poke.nombre
    );
    response.json(info);
});

//2. Obtener todas las peliculas de un genero en particular 2. Obtener la info de un entrenador por su ID
app.get("/obtenerPorID/:id", function (request, response) {
  const { id } = request.params;

  const resultado = pokemonData.filter((poke) =>
    poke.id
      .map((id) => id.toLowerCase())
      .includes(id.toLowerCase())
  );

  response.json(resultado);
});

//3. Obtener todas las peliculas donde participa un actor en particular 3. Obtener el listado de POKEMON de un entrenador (por ID)
 
app.get("/obtenerPokeID", function (request, response) {
  const { id } = request.query;

  const resultado = pokemonData.filter((poke) =>
    poke.id
      .map((id) => id.toLowerCase())
      .includes(id.toLowerCase())
  );

  response.json(resultado.pokemon);
});



//4. Agregar una nueva pelicula (crear un nuevo ID) 4. Crear un nuevo entrenador (sin pokemon)
app.get("/agregarEntrenador", function (request, response) {
  const entrenador = request.body;

  // Vieja
  //pelicula.id = ++ultimoID;
  //peliculas.push(pelicula);

  // Moderna
  pokemonData.push({ ...entrenador, id: ++ultimoID });

  response.end("Entrenador agregado");
});

 
//4. Agregar una nueva pelicula (crear un nuevo ID) 5. Agregar un pokemon a un entrenador
app.get("/agregarPelicula", function (request, response) {
    const pelicula = request.body;
  
    // Vieja
    //pelicula.id = ++ultimoID;
    //peliculas.push(pelicula);
  
    // Moderna
    pokemonData.push({ ...pelicula, id: ++ultimoID });
  
    response.end("Pelicula agregada");
  });
  
  app.listen(80, function () {
    console.log("> Escuchando puerto 80");
  });
 