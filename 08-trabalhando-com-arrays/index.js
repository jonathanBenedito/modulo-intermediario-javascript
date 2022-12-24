// Podemos acessar todos os valores em uma array, usando o loop for para 
// percorrer seus indices

let frutas = ['banana', 'maçã', 'laranja', 'pêra']
let frutasTamanho = frutas.length

for (let i = 0; i < frutasTamanho; i++) {
    console.log('Fruta: ' + frutas[i])
}

// Usando forEach, podemos pegar por item, indice ou array

frutas.forEach((item, indice, array) => {
    console.log("Item: " + item)
})

// Adicionando um elemento num array e colocando na última posição

frutas.push('manga')

// Adicionando um elemento num array e colocando na primeira posição

frutas.unshift('morango')

// Removendo um item no final do array

frutas.pop()

// Removendo um item no inicio do array

frutas.shift()

// Usando forEach, podemos pegar por item, indice ou array

frutas.forEach((item, indice, array) => {
    console.log("Alterado: " + item)
})