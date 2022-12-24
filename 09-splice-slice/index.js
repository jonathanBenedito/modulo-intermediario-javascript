// Slice serve para extrair items, informando sua posição inicial até a 
// posição final preservando sua array.

let frutas = ['Banana', 'Maçã', 'Laranja', 'Uva']

// Neste exemplo, nós extraíremos os items pelo elemento 'Maçã' até a 'Uva'
// Tenha em mente não ele pega o item da última posição

// Extraíndo 'Maçã' e 'Laranja'
let frutasExtraidas = frutas.slice(1, 3)

console.log(frutasExtraidas)

// Splice serve para remover items, informando sua posição inicial e a
// quantidade que a função percorerrá a partir do inicio

// Removendo 'Maçã' e 'Laranja'
let frutasRemovidas = frutas.splice(1, 2)

console.log(frutas)

// Podemos usar o splice para remover e substituir por elementos novos no
// lugar

// Substituindo 'Maçã' e 'Laranja' por 'Pera' e 'Goiaba'
let removeEadicionaFrutas = frutas.splice(1, 2, 'Pera', 'Goiaba')

console.log(frutas)