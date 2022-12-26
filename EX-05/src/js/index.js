const slides = document.querySelectorAll('.slide');
const setaEsquerda = document.querySelector('.seta-esquerda');
const setaDireita = document.querySelector('.seta-direita');
const numeroPaginas = slides.length;
let paginaAtual = 0;

setaDireita.addEventListener("click", () => {
    if (paginaAtual < numeroPaginas - 1) {
        slides[paginaAtual].classList.add('esconder');
        paginaAtual++;
        slides[paginaAtual].classList.remove('esconder')
    }
    checarBotoes();
})

setaEsquerda.addEventListener("click", () => {
    if (paginaAtual > 0) {
        slides[paginaAtual].classList.add('esconder');
        paginaAtual--;
        slides[paginaAtual].classList.remove('esconder')
    }
    checarBotoes();
})

function checarBotoes() {
    if (paginaAtual === 0) {
        setaEsquerda.classList.add('desativada');
        setaDireita.classList.remove('desativada');
    } else if (paginaAtual === numeroPaginas - 1) {
        setaDireita.classList.add('desativada');
        setaEsquerda.classList.remove('desativada');
    } else {
        setaEsquerda.classList.remove('desativada');
        setaDireita.classList.remove('desativada');
    }
}