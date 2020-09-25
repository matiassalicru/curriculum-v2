const experiencias = document.querySelector("#experiencias");
const formacion = document.querySelector("#formacion");
const cursos = document.querySelector("#cursos");
const habilidades = document.querySelector("#habilidades");
const btn = document.querySelector("#redirect");

function showExp(e) {
  let target = e.target.nextElementSibling;

  if (target.style.display === "flex") {
    target.style.display = "none";
  } else {
    target.style.display = "flex";
  }
}

experiencias.addEventListener("click", showExp);
formacion.addEventListener("click", showExp);
cursos.addEventListener("click", showExp);
habilidades.addEventListener("click", showExp);