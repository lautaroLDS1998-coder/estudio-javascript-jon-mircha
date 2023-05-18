const userAutenth = new Promise(function (resolve, reject) {
  let authent = false;

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
    console.error(error);
  });

// Existen 3 valores en promises:

// resolve: autenticacion cumplida
// pending: autenticacion pendiente
// reject: autenticacion rechazada

// es mas o menos lo mismo, sinó revisar el capitulo del curso
