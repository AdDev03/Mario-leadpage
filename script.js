

const form = document.querySelector(".formulário-orçamento")
const mascara = document.querySelector(".mascara-formulario")
// const mascara2 = document.querySelector(".mascara-formulario")

function mostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"
}

function esconderForm() {
    form.style.left = "-300px"
    mascara.style.visibility = "hidden"
    form.style.transform = "translatex(0)"

}