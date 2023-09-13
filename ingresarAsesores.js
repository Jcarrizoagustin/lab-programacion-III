const nombreAsesor = document.getElementById('nombreAsesor')
const apellidoAsesor = document.getElementById('apellidoAsesor')
const cuitAsesor = document.getElementById('cuitAsesor')

const tablaAsesor = document.getElementById('tablaAsesores')

const btnEnviarAsesor = document.getElementById('btn_enviarAsesor')

const asesores = []


const agregarAsesor = (e) => {
    asesores.push({'nombre':nombreAsesor.value,'apellido':apellidoAsesor.value,'cuit':cuitAsesor.value})
    e.preventDefault()
    let string = ''

    asesores.forEach(e => string+=`<tr>
    <td>${e.nombre}</td>
    <td>${e.apellido}</td>
    <td>${e.cuit}</td>
    <td><button class="btn btn-danger btn-rounded btn-fw">Eliminar</button></td>
  </tr>`)

  tablaAsesor.innerHTML = string
}

btnEnviarAsesor.addEventListener('click',(e) => {
    agregarAsesor(e)
    console.log(nombre.value);
    console.log(apellido.value);
    console.log(cuit.value);
})

