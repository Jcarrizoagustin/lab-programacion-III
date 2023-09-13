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

