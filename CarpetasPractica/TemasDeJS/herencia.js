let Algo = class {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  saludo2() {
    console.log(`Hola me llamo ${this.nombre}, mi apellido es la misma 
    mierda de siempre ${this.apellido} y tengo ${this.edad} de viejo`);
  }
  saludo() {
    console.log(
      `Hola me llamo ${this.nombre}, mi apellido 
      es ${this.apellido} y tengo ${this.edad} años`
    );
  }
};



// Esto es herencia
class otraPersona extends Algo {
  constructor(nombre, apellido, edad, altura) {
    // manda a llamar los parametros del constructor padre solamente
    // para ahorrar codigo(?
    super(nombre, apellido, edad);
    this.altura = altura;
    }
    desc() {
        console.log(`Mi nombre y apellido son ${this.nombre}${this.apellido}, tendo una edad de ${this.edad} y mido ${this.altura}  `)
    }
}

let ninio = new otraPersona('agustin', 'martinez', 9, '1.40cm');

ninio.desc()

