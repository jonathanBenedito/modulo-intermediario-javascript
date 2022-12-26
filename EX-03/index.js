const quadrado = document.querySelector("#quadrado");
let pretoFoiRemovido = false;

quadrado.addEventListener('click', function () {
    const listaClassesDoQuadrado = quadrado.classList;

    listaClassesDoQuadrado.forEach(classe => {
        if (classe === 'azul' && !pretoFoiRemovido) {
            quadrado.classList.remove('preto');
            pretoFoiRemovido = true;
            alert("Esse quadrado TEM a classe azul!");
        } else if (classe === 'azul' && pretoFoiRemovido){
            quadrado.classList.add('preto');
            pretoFoiRemovido = false;
        }
    });
})