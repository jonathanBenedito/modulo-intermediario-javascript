// Manipulando estilos por propriedades diretamente

function alterarCorDeFundoPrimeiroPost() {
    let posts = document.getElementsByClassName('post')

    console.log(posts)

    let primeiroPost = posts[0]
    primeiroPost.style.backgroundColor = 'red'
}

// Manipulando estilos por adição de classes

function aumentarFonteDoSegundoPost() {
    let textPosts = document.getElementsByClassName('texto-post')

    textPosts[1].classList.add('fonte-grande')
}

// Manipulando atributos

function marcarRadio(genero) {
    let radioMasculino = document.getElementById('genero-masculino')

    let radioFeminino = document.getElementById('genero-feminino')

    if (genero === 'M') {
        radioMasculino.checked = true
    } else if (genero === 'F') {
        radioFeminino.checked = true
    }
}