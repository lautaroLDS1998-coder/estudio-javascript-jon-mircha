// mensaje.apply(lugarSecundario, ['function'])

this.mensaje1 = "contexto global";

function mensaje(mns1, mns2) {
  //   console.log(`${mns1} de ${this.mensaje1}`);
}
mensaje("primer mensaje");

// --------------------------

this.lugar = "Texto scope global";

let lugarSecundario = {
  mensaje: "mensaje scope",
};

mensaje.call(this, "hola");

// lo mismo pero con apply
// repasar para que se usa cada uno (bind, call, apply)
mensaje.apply(this, ["hola"]);

// bind
let persona = {
  nombre: "Lau",
  saluda: function () {
    console.log(`Hola, soy ${this.nombre}`);
  },
};

persona.saluda();

let otraPersona = {
  // bind es para enlazar con el contexto a otra funcion
  saluda: persona.saluda.bind(persona),
};
otraPersona.saluda();
