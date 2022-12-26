// Adicionando um evento no select usando addEventListener

let selectDeEstado = document.querySelector("select[name='estado']")

selectDeEstado.addEventListener('change', function (event) {
    console.log(event.target.value)
})