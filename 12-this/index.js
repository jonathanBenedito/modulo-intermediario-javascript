// Strict faz com que o javascript restrinja o acesso de variaveis declaradas fora
// dos blocos, forçando a obedecer os escopos das declarações.
'use strict'

// this serve para apontar alguma variável ou função que esteja dentro
// do escopo de onde 'this' está sendo usado

this.name = 'Ricardo'

// Ao tentar ler a variável nome, emitirá um erro, pois esta variável se encontra
// fora do escopo, por conta da condição imposta pelo 'use strict'

function saudar() {
    console.log("this no contexto da função", this)
    console.log("Olá, " + this.name)
}

saudar()

// this é utilizado para referenciar o nome que está dentro
// da função

let usuario = { 
    nome: 'Roberto',
    excluir: function () {
        console.log('O usuario, ' + this.nome + ' foi excluído!')
    }
 }

 usuario.excluir()

 let comida = {
    nome: 'Brócolis',
    temperatura: 0
 }

 comida.cozinhar = function(comidaParaCozinhar, temperaturaDeCozimento) {
    this.temperatura = temperaturaDeCozimento;
 }

 console.log(comida)

 comida.cozinhar(comida, 100)

 console.log(comida)