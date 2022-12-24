// Array multidimensionals são arrays dentro de arrays.

let filmes = [ 
    ['Vingadores', 4.5, true],
    ['Mulher Maravilha', 4.6, false]
] 

// Para acessar o conteúdo do último filho do array, basta pegar a index do pai
// e pegar a index do filho. Assim como a variável abaixo:

console.table(filmes[0][1])
