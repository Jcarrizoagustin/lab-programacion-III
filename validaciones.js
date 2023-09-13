const fecha = document.getElementById('fecha')
const btnEnviar = document.getElementById('btnEnviar')

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault()
    const fechaActual = Date.now()
    if(Date.parse(fecha.value) < fechaActual){
        alert('La fecha no puede ser menor que el dia actual')
    }else{
        alert('La fecha es correcta')
    }
})