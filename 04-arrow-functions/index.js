// Arrow functions são funções escritas de forma diferente usando uma seta, 
// isso nos possibilita em simplificar suas declarações

// 1# Forma: Setas com chaves, usado quando o bloco tem mais de uma linha

let resultadoDaSubtracao = (numero1, numero2) => {
    return numero1 - numero2
}

// 2# Forma: Parâmetro único, podemos tirar os parênteses

const incetivarQuester = nomeQuester => {
    console.log('Parabéns ' + nomeQuester + ' , Você chegou ao módulo de JS intermediário')
}

// 3# Forma: Sem parâmetro, usando parênteses vazios

const saudacao = () => { console.log("Olá!")} 

// 4# Forma: Sem chaves, usado quando a função se resume em uma linha

let resultadoDaSoma = (numero1, numero2) => numero1 + numero2

console.log(resultadoDaSubtracao(12, 5))
incetivarQuester('Roberto')
saudacao()
console.log(resultadoDaSoma(1, 3))