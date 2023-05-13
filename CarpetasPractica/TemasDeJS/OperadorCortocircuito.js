function saludo(nombre) {
  nombre = nombre || "desconodico";

  console.log(`Hola ${nombre}`);
}

// AND: Cuando el valor de la izquierda sea falso, el valor de la derecha es el valor que
// va a cargar por defecto
saludo("no se" || null);
saludo("no se" && null);
// OR: Cuando el valor de la izquierda sea verdadero, el valor de la izquierda
//  es el valor que va a cargar por defecto

// saludo('carlos')
