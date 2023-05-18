function cuadradoPromise(value) {
  if (typeof value !== "number")
    return Promise.reject(`Este valor: ${value} no es un numero`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        resultado: value * value,
      });
    }, 1000);
  });
}

// este es el codigo de jon mircha
async function funAsyncrona() {
  try {
    console.log("inicio del async");

    // si no se pone await, cuadradoPromise va a retornar undefined, 
    // se tiene que esperar que llegue el valor
    let valor1 = await cuadradoPromise(6);
    console.log(
      `Funcion asyncrona ${valor1.value} otra es ${valor1.resultado}`
    );


    valor1 =  cuadradoPromise(4);
    console.log("(abajo esta la demostracion sin await)");
    console.log(
      ` Funcion asyncrona ${valor1.value} otra es ${valor1.resultado}`
      );
  } catch (error) {console.error(error)}
}

funAsyncrona();
// hay que llamar a la funcion con el console.error
// cuadradoPromise();
