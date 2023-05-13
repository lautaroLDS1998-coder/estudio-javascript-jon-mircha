// ejercicio 2

// Programa una función para contar el número de veces que se
// repite una palabra en un texto largo,
// pe.miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

let cadenas = ("hola mundo adios mundo", "mundo");

let palabras = (cadena = "") => {
  if (cadena) {
    console.alert("No ingresaste nada");
  }
};

palabras("hola");

//  Programa una función que valide si una palabra o frase dada,
//  es un palíndromo(que se lee igual en un sentido que en otro),
// pe.mifuncion("Salas") devolverá true.

function reversa(cadena, cadena1) {
  let cadena = ["Salas"];
  let cadena1 = [];

  let cadena1 = cadena.reverse();
  // console.log(cadena1)

  if (cadena1 === cadena) {
    // console.log("son iguales");
  } else if (cadena != cadena1) {
    // console.log("son distintos");
  }
}
// reversa(cadena1)
