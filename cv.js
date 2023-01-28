
const ref = document.getElementById("ref");
const mostrar = document.getElementById("mostrar");
const divExp = document.getElementById("divExperiencia");
const referencias = document.getElementById("referencias");
const exp = document.getElementById("exp2");



referencias.addEventListener("click", () => { //ocultar experiencia
    divExp.style.display = "none"
    ref.style.display = "flex"
})

exp.addEventListener("click", () => { 
    ref.style.display = "none"
    divExp.style.display = "flex"
})

