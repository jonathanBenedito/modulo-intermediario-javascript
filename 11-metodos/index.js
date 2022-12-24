// Metodos são funções que funcionam dentro de objetos

let usuario = { 
    nome: 'Roberto',
    excluir: function () {
        console.log('O usuario, ' + this.nome + ' foi excluído!')
    }
 }

 usuario.excluir()