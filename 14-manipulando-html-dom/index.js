// É uma função que adiciona comentários após clicar no botão.
// Ela pega o texto dentro do input pelo seu nome 'novo-comentario' 
// e adiciona um novo parágrafo com aquele texto dentro da div pelo 
// seu id 'novos-comentarios'

function adicionarComentario() {
    let inputComentario = document.getElementsByName('novo-comentario')
    
    let textoDigitado = inputComentario[0].value;

    let novosComentarios = document.getElementById("novos-comentarios")

    novosComentarios.innerHTML += `<p>Novo comentário: ${textoDigitado} </p>`
}