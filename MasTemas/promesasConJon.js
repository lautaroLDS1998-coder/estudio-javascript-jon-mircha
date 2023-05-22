function cuadradoPromise(value) {
  // esto es simplemente si le das a la promera en vez de un numero, un caracter pues retorna un error
  if (typeof value !== "number")
    return Promise.reject(`Error este valor ${value} no es un numero`);

  // esto es un temporizador que tarda 1 segundo para simular que tarda en dar el dato
  // con el rejunte del valor
  // que le das al parametro de la promesa y ese valor elevado al cuadrado
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        resultado: value * value,
      });
    }, 1000);
  });
}

cuadradoPromise(4)
  // el then representa la parte que se cumple de la promesa
  .then((object) => {
    console.log("inicio de la promesa");
    console.log(
      `Valor sin elevar: ${object.value} y Valor elevado al cuadrado de la promesa: ${object.resultado} `
    );
    return cuadradoPromise();
  })
  .then((object) => {
    console.log("inicio de la promesa");
    console.log(
      `Valor sin elevar: ${object.value} y Valor elevado al cuadrado de la promesa: ${object.resultado} `
    );
    return cuadradoPromise();
  })
  .then((object) => {
    console.log("inicio de la promesa");
    console.log(
      `Valor sin elevar: ${object.value} y Valor elevado al cuadrado de la promesa: ${object.resultado} `
    );
    return cuadradoPromise();
  })
  .then((object) => {
    console.log("inicio de la promesa");
    console.log(
      `Valor sin elevar: ${object.value} y Valor elevado al cuadrado de la promesa: ${object.resultado} `
    );
    return cuadradoPromise();
  })
  .catch((error) => console.error(error));
