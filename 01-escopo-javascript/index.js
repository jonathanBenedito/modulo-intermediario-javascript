// // ESCOPO DE BLOCO
// // Variáveis declaradas como const e let não são acessíveis fora do bloco if
// if (true) {
//     const saudacao = 'Olá'
// }

// // Variáveis declaradas como var consegue ser acessadas de fora
// if (true) {
//     var despedida = 'Tchau'
// }

// console.log(despedida)
// console.log(saudacao)

// // ESCOPO AUTÔNOMO
// // Variáveis declaradas como const ou let não são acessíveis fora do bloco
// {
//     let despedida = 'Olá'
// }

// // Variáveis declaradas como var consegue ser acessadas de fora
// {
//     var saudacao = 'Olá'
// }

// console.log(saudacao)
// console.log(despedida)

// // ESCOPO DE FUNÇÃO
// // As variáveis declaradas dentro da função, só poderão ser usadas dentro dela.
// function falar() {
//     var mensagem = 'Olá Mundo!'
//     console.log(mensagem)
// }

// falar()
// console.log(mensagem)


// // Assim como as variáveis, as funções declarada dentro de outra função, 
// // só poderão ser usadas pelo seu pai.
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

// falar()
// console.log(falarOutraCoisa)