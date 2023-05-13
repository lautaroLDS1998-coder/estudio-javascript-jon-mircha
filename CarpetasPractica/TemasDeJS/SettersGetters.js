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
    get saludoCualquiera(){
        return this.saludete;
    }
    set setsaluTres(saludete) {
      this.saludete = saludete;
    }
  };


aLGO