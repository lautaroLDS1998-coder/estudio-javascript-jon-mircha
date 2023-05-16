const userAutenth = new Promise(function (resolve, reject) {
  let authent = 1;

  if (authent) {
    resolve("usuario autenticado");
  } else {
    reject("autenticacion rechazada");
  }
});
console.log(userAutenth);

userAutenth
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });

// Existen 3 valores en promises:

// resolve: autenticacion cumplida
// pending: autenticacion pendiente
// reject: autenticacion rechazada

// es mas o menos lo mismo, sinó revisar el capitulo del curso
