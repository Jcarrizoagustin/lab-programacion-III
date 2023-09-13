const menuRegistrar = document.getElementById('menu_registrar');
const menuInformes = document.getElementById('menu_informes');

const registrar = document.getElementById('registrar');
const informes = document.getElementById('informes');

console.log(menuRegistrar);

registrar.addEventListener('click',() => {
    menuRegistrar.classList.toggle('show')
})

informes.addEventListener('click',() => {
    
    menuInformes.classList.toggle('show')
})