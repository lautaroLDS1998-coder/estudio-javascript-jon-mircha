
// acá, el tercer parametro, te permite
// agregar incontables argumentos o valores
//  que se van a seguir sumando sin que de undefined

// Rest
// function numeros(a,...c ) {
//   let sumando = a + b;
  
//   c.forEach(function (numero) {
//       sumando = sumando + numero
//   })

//   return sumando;
// }

// console.log(numeros(4, 65))



// Spread operator
let array1 = [4, 6, 4, 7, 7, 34]
let array2 = [3, 675, 4, 7, 4, 3, 5, 5, 7, 87,]

let rejuntedeArrays = [...array1, ...array2]

console.log(rejuntedeArrays)
