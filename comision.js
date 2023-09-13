
const option = document.getElementById('option')
const formulario = document.getElementById('agregar')

const nombres = document.getElementsByClassName('nombreDocente')
const apellidos = document.getElementsByClassName('apellidoDocente')
const cuils = document.getElementsByClassName('cuilDocente')
const docentes = []
const actualizarFormulario = (e) => {
    
    let cantidad = parseInt(e.target.value)
    let str = ''
    for(let i = 1; i<=cantidad; i++){
        str += `
        <p class="card-description">
        Docente ${i}
        </p>
        <div class="form-group">
        <label for="nombreDocente${i}">Nombre</label>
        <input id="nombreDocente${i}" type="text" class="form-control nombreDocente"  placeholder="Nombre">
        </div>
        <div class="form-group">
        <label for="apellidoDocente${i}">Apellido</label>
        <input id="apellidoDocente${i}" type="text" class="form-control apellidoDocente" placeholder="Apellido">
        </div>
        <div class="form-group">
        <label for="cuilDocente${i}">Cuil</label>
        <input id="cuilDocente${i}" type="text" class="form-control cuilDocente" placeholder="Cuit">
        </div>
        `
    }
    formulario.innerHTML = str
}



option.addEventListener('change',(e) => actualizarFormulario(e))
