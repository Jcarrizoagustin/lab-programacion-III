//ejercicio 2:

//Definimos el objeto persona

function Persona(nombre, apellido, genero){
  this.nombre = nombre;
  this.apellido = apellido;
  this.genero = genero;
}

Persona.prototype.obtDetalles = function() {
  console.log("nombre: "+ this.nombre +" Apellido: "+ this.apellido +" genero: "+ this.genero);
};

function Estudiante (nombre, apellido, genero, curso, grupo) {
  Persona.call(this, nombre, apellido, genero);
  this.curso = curso;
  this.grupo = grupo;
}

//realizamos una herencaia  
Estudiante.prototype = Object.create(Persona.prototype);

//metodo registrar de Estudiante
Estudiante.prototype.registrar = function(){
  console.log(this.nombre+" "+this.apellido+ " se ha registrado en el grupo: " +this.grupo);
};

function Profesor(nombre, apellido, genero, asignatura, comicion){
  Persona.call(this , nombre, apellido, genero);
  this.asignatura = asignatura;
  this.comicion = comicion;
}
// realizamos una herencia
Profesor.prototype= Object.create(Persona.prototype);

//metodo para asignar profesor
Profesor.prototype.asignar = function(){
  console.log("El profesor: "+this.nombre +" "+ this.apellido +" Se registro en la comision: "+this.comicion);
}


//pruebas
console.log("ejecutando pruebas: ");

let estudiante = new Estudiante("BRAIAN","SALAVARRIA","MASCULINO","PROGRAMACION 2","GRUPO 2");
let profesor = new Profesor("CARLOS","SANTILLAN","MASCULINO","ANALISIS MATEMATICO","GRUPO 2");

estudiante.obtDetalles();
estudiante.registrar();

profesor.obtDetalles();
profesor.asignar();

//ejercicio 3

const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const correo = document.getElementById('email')

const tabla = document.getElementById('tabla')

const btnEnviar = document.getElementById('btn_enviar')

const alumnos = []


const agregarEstudiante = (e) => {
    alumnos.push({'nombre':nombre.value,'apellido':apellido.value,'correo':correo.value})
    e.preventDefault()
    let string = ''

    alumnos.forEach(e => string+=`<tr>
    <td>${e.nombre}</td>
    <td>${e.apellido}</td>
    <td>${e.correo}</td>
    <td><button class="btn btn-danger btn-rounded btn-fw">Eliminar</button></td>
  </tr>`)

    tabla.innerHTML = string
}

btnEnviar.addEventListener('click',(e) => {
    agregarEstudiante(e)
    console.log(nombre.value);
    console.log(apellido.value);
    console.log(correo.value);
})

