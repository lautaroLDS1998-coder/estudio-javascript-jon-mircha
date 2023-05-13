let Algo = class {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    // este es un metodo normal
  }
  // Esto seria otro metodo llamado con el prototipo (aunque en este caso se puede no escribir con prototype)
// cuando querés
// hacer un metodo por fuera a la clase principal pero que esté conectada directamente con sus this.
// la funcion en flecha no funciona en prototype, los this no conectan con la clase constructora
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


let nuevaPersona = new Algo("gonzalo", "martinez", 34),
  nuevaPersona1 = new Algo("Roberto", "Valdez", 55),
  nuevaPersona2 = new Algo("carlos", "Valdez", 55),
  nuevaPersona3 = new Algo("gustavo", "Valdez", 55),
  nuevaPersona4 = new Algo("Tincho", "Valdez", 55);

console.log(nuevaPersona);
console.log(nuevaPersona1);
console.log(nuevaPersona2);
console.log(nuevaPersona3);
console.log(nuevaPersona4);
console.log(nuevaPersona.saludo());
console.log(nuevaPersona1.saludo());
console.log(nuevaPersona2.saludo2());
console.log(nuevaPersona3.saludo2());
console.log(nuevaPersona4.saludo2());

// Ver mejor el tema de la herencia por que no se todavia para que sirve y es bastante enroscado
