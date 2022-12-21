// Variáveis declaradas como const e let não são acessíveis fora do bloco if
if (true) {
    const saudacao = 'Olá'
}

// Variáveis declaradas como var consegue ser acessadas de fora
if (true) {
    var despedida = 'Tchau'
}

console.log(despedida)
console.log(saudacao)

// {
//     var mensagem = 'Olá'
//     console.log(mensagem)
// }

// function falar() {
//     var mensagem = 'Olá Mundo!'
//     console.log(mensagem)
// }

// falar()
// console.log(mensagem)

// function falar() {
//     var mensagem = 'Olá Mundo!'
//     console.log(mensagem)
//     function falarOutraCoisa() {

//     }
    
//     falarOutraCoisa()
//     console.log(falarOutraCoisa)
// }

// falar()
// console.log(falarOutraCoisa)

// escopo de bloco
// escopo autonomo
// escopo de função
// escopo global