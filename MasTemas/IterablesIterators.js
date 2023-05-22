let elemento = "buenassssssss";
// mas datos iterables
// let elemento = new Set([3, 45, 3, 6]);
// let elemento = new Map([["buenas tardes", "hola", "edad", 25]]);

let iterador = elemento[Symbol.iterator]();

// .next devuelve un objeto
// console.log(iterador.next());

console.log(elemento);

// esto devuelve un objeto
// dentro de este objeto va a tener el valor de la posicion cero, retornando de vuelta
// va a tener el valor de la posicion 1 y así sucecivamente

// EJEMPLO
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

// en la consola aparece:
// Object { value: 4, done: false }
// Object { value: 435345345, done: false }
// Object { value: 1, done: false }
// Object { value: 43343, done: false }
// Object { value: 8, done: false }
// Object { value: 89, done: false }
// Object { value: 3, done: false }
// Object { value: 4, done: false }


let x = iterador.next();

while (!x.done) {

    // imprime unicamente el valor
  console.log(x.value);

    // si reasignas, va a hacer un solo retorno
    // pero si está reasignandose el valor contantemente por vuelta, tira todos los valores
    //con el bucle
  x = iterador.next();
}

// while(

// let variable = elemento.next();

// while (!variable.done) {
//     console.log(variable.value)

//     variable = elemento.next()
// }
