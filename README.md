# Índice das Aulas Javascript Básico
📄 Link de acesso aos <a href="https://cord-delivery-7eb.notion.site/Javascript-Intermedi-rio-fc28db16ddf744ef8b7ec4f72138c7dd">resumos</a>. 

🖼 Link de acesso a <a href="https://jonathanbenedito.github.io/modulo-intermediario-javascript/">página</a>.

<!-- TABLE OF CONTENTS -->
## Conteúdo
<ul>
    <li>
        <a href="#aula-01---escopos-do-javascript">Aula 01 - Escopos do Javascript</a>
    </li>
    <li>
        <a href="#aula-02---hoisting">Aula 02 - Hoisting</a>
    </li>
    <li>
        <a href="#aula-03---funções-anônimas">Aula 03 - Funções Anônimas</a>
    </li>
    <li>
        <a href="#aula-04---arrow-functions">Aula 04 - Arrow Functions</a>
    </li>
    <li>
        <a href="#aula-05---higher-order-functions">Aula 05 - Higher Order Functions</a>
    </li>
    <li>
        <a href="#aula-06---arrays">Aula 06 - Arrays</a>
    </li>
    <li>
        <a href="#aula-07---arrays-multidimensionais">Aula 07 - Arrays Multidimensionais</a>
    </li>
    <li>
        <a href="#aula-08---trabalhando-com-arrays">Aula 08 - Trabalhando com Arrays</a>
    </li>
    <li>
        <a href="#aula-09---slice-e-splice">Aula 09 - Slice e Splice</a>
    </li>
</ul>

## Aula 01 - Escopos do Javascript

```jsx
// ESCOPO DE BLOCO
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

// ESCOPO AUTÔNOMO
// Variáveis declaradas como const ou let não são acessíveis fora do bloco
{
    let despedida = 'Olá'
}

// Variáveis declaradas como var consegue ser acessadas de fora
{
    var saudacao = 'Olá'
}

console.log(saudacao)
console.log(despedida)

// ESCOPO DE FUNÇÃO
// As variáveis declaradas dentro da função, só poderão ser usadas dentro dela.
function falar() {
    var mensagem = 'Olá Mundo!'
    console.log(mensagem)
}

falar()
console.log(mensagem)


// Assim como as variáveis, as funções declarada dentro de outra função, 
// só poderão ser usadas pelo seu pai.
function falar() {
    var mensagem = 'Olá Mundo!'
    console.log(mensagem)
    function falarOutraCoisa() {

    }
    
    falarOutraCoisa()
    console.log(falarOutraCoisa)
}

falar()
console.log(falarOutraCoisa)

falar()
console.log(falarOutraCoisa)

// ESCOPO GLOBAL
<!-- Variáveis declaradas dentro da tag script no HTML, 
podem ser lidas por qualquer outro script, desde que sejam declaradas primeiro. -->
<script>
    let url = "https://www.youtube.com/watch?v=DO4k7Y3NQRg"
</script>
<script src="index.js"></script>
```

## Aula 02 - Hoisting

```jsx
// Hoisting é quando o js detecta uma variável declarada abaixo de 
// onde foi chamada e traz ela pro topo do código, quaisquer 
// valores atribuídos serão ignorados.

console.log(pais)
var pais = 'Brasil'

// OBS: Funciona apenas com variáveis declaradas como var
```

## Aula 03 - Funções Anônimas

```jsx
// Funções anônimas, são funções declaradas sem nome que podem
// ser usadas para atribuir valores a uma variável por exemplo.

let resultadoDaSoma = function(numero1,  numero2){
    return numero1 + numero2
}

console.log(resultadoDaSoma(12, 5))
```

## Aula 04 - Arrow Functions

```jsx
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
```

## Aula 05 - Higher Order Functions

```jsx
// Higher Order Functions são funções que retornam ou recebem como parâmetro 
// outras funções.

// Utilizando função como parâmetro

const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir){
    const mesAtual = 2
    let anoDeNascimento = 2021 - idade
    if (mesDeNascimento > mesAtual) anoDeNascimento--
    imprimir(anoDeNascimento)
}

let imprimirAnoDeNascimento = anoDeNascimento => {
    console.log('Seu ano de nascimento é: ' + anoDeNascimento)
}

calcularAnoDeNascimento(33, 3, imprimirAnoDeNascimento)

// Retornando uma outra função

function multiplicar(multiplicador) {
    return function(numero) {
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)
```

## Aula 06 - Arrays

```jsx
// Arrays são variáveis que podem armazenar mais de um valor, 
// desde que estejam dentro de colchetes e separados por vírgulas.

let filmes = ['Vingadores', 'Mulher Maravilha']

// Elas também podem conter varios tipos de valores

let descricaoFilme = ['Vingadores', 4.6]

// Para acessar algum conteúdo dentro delas, é preciso acessar sua posição na index, 
// note que elas as começam sempre na posição 0.
// A variável filmes contém 2 valores, logo suas posições seriam: [0, 1]
// Para acessar o valor 'Mulher Maravilha', devemos usar a index 1, como escrito abaixo.

console.log(filmes[1])
console.log(descricaoFilme)
```

## Aula 07 - Arrays Multidimensionais

```jsx
// Array multidimensionals são arrays dentro de arrays.

let filmes = [ 
    ['Vingadores', 4.5, true],
    ['Mulher Maravilha', 4.6, false]
] 

// Para acessar o conteúdo do último filho do array, basta pegar a index do pai
// e pegar a index do filho. Assim como a variável abaixo:

console.table(filmes[0][1])
```

## Aula 08 - Trabalhando com Arrays

```jsx
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
```

### Adicionando elementos

```jsx
// Adicionando um elemento num array e colocando na última posição.

frutas.push('manga')

// Adicionando um elemento num array e colocando na primeira posição.

frutas.unshift('morango')
```

### Removendo elementos

```jsx
// Removendo um item no final do array

frutas.pop()

// Removendo um item no inicio do array

frutas.shift()
```

## Aula 09 - Slice e Splice

`Slice`

```jsx
// Slice serve para extrair items, informando sua posição inicial até a 
// posição final preservando sua array.

let frutas = ['Banana', 'Maçã', 'Laranja', 'Uva']

// Neste exemplo, nós extraíremos os items pelo elemento 'Maçã' até a 'Uva'
// Tenha em mente não ele pega o item da última posição

// Extraíndo 'Maçã' e 'Laranja'
let frutasExtraidas = frutas.slice(1, 3)
```

`Splice`

```jsx
// Splice serve para remover items, informando sua posição inicial e a
// quantidade que a função percorerrá a partir do inicio

// Removendo 'Maçã' e 'Laranja'
let frutasRemovidas = frutas.splice(1, 2)
```

```jsx
// Podemos usar o splice para remover e substituir por elementos novos no
// lugar

// Substituindo 'Maçã' e 'Laranja' por 'Pera' e 'Goiaba'
let removeEadicionaFrutas = frutas.splice(1, 2, 'Pera', 'Goiaba')
```

