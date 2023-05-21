let elemento = [4, 435345345, 1, 43343, 8, 89, 3, 4];


let iterador = elemento[Symbol.iterator]();

// .next devuelve un objeto
// console.log(iterador.next());


console.log(elemento);

// esto devuelve un objeto
// dentro de este objeto va a tener el valor de la posicion cero, retornando de vuelta
// va a tener el valor de la posicion 1 y así sucecivamente

// EJEMPLO
// Object { value: 4, done: false }
// Object { value: 435345345, done: false }
// Object { value: 1, done: false }
// Object { value: 43343, done: false }
// Object { value: 8, done: false }
// Object { value: 89, done: false }
// Object { value: 3, done: false }
// Object { value: 4, done: false }
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
 

let x = iterador.next()

while (!x.done) {
    console.log(x.value)

    x = iterador.next()
}

// while(

// let variable = elemento.next();

// while (!variable.done) {
//     console.log(variable.value)

//     variable = elemento.next()
// }