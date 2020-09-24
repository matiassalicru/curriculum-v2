const experiencias = document.querySelector("#experiencias");
const formacion = document.querySelector("#formacion");
const cursos = document.querySelector("#cursos");
const habilidades = document.querySelector("#habilidades");



function showExp(e) {
    let target = e.target.nextElementSibling;

    if(target.style.display === 'none'){
        target.style.display = "block";
    } else {
        target.style.display = "none";
    }
}

experiencias.addEventListener('click', showExp);
formacion.addEventListener("click", showExp);
cursos.addEventListener("click", showExp);
habilidades.addEventListener("click", showExp);
