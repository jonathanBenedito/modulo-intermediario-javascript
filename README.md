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
    <li>
        <a href="#aula-10---objetos">Aula 10 - Objetos</a>
    </li>
    <li>
        <a href="#aula-11---métodos">Aula 11 - Métodos</a>
    </li>
    <li>
        <a href="#aula-12---strict-e-this">Aula 12 - Strict e This</a>
    </li>
    <li>
        <a href="#aula-13---selecionando-elementos-do-dom">Aula 13 - Selecionando Elementos do DOM</a>
    </li>
    <li>
        <a href="#aula-14---manipulando-html">Aula 14 - Manipulando HTML</a>
    </li>
    <li>
        <a href="#aula-15---manipulando-atributos-e-estilos">Aula 15 - Manipulando Atributos e Estilos</a>
    </li>
    <li>
        <a href="#aula-16---adicionando-eventos">Aula 16 - Adicionando Eventos</a>
    </li>
</ul>

<ul>
    <li>
        <a href="#exercício-01">Exercício 01
    </li>
    <li>
        <a href="#exercício-02">Exercício 02
    </li>
    <li>
        <a href="#exercício-03">Exercício 03
    </li>
    <li>
        <a href="#exercício-04">Exercício 04
    </li>
    <li>
        <a href="#exercício-05">Exercício 05
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

## Aula 10 - Objetos

```jsx
// Objetos são entidades com propriedades, como se fossem uma array 
// com valores identificado por nomes.

let tenis = {
    // chave: valor
    cor: 'branco',
    tamanho: 42,
    emEstoque: true
}

// É possível adicionar propriedades novas, após ser declarada.
// Basta nomear uma propriedade depois do ponto e atribuir um valor,
// como no exemplo abaixo: tenis.valor = 200

tenis.valor = 200
```

## Aula 11 - Métodos

```jsx
// Metodos são funções que funcionam dentro de objetos

let usuario = { 
    nome: 'Roberto',
    excluir: function () {
        console.log('O usuario, ' + this.nome + ' foi excluído!')
    }
 }

 usuario.excluir()
```

## Aula 12 - Strict e This
- `use strict`
```jsx
// Strict faz com que o javascript restrinja o acesso de variaveis declaradas fora
// dos blocos, forçando a obedecer os escopos das declarações.
'use strict'

this.name = 'Ricardo'

// Ao tentar ler a variável nome, emitirá um erro, pois esta variável se encontra
// fora do escopo, por conta da condição imposta pelo 'use strict'

function saudar() {
    console.log("this no contexto da função", this)
    console.log("Olá, " + this.name)
}

saudar()
```

- `this`
```jsx
// this serve para apontar alguma variável ou função que esteja dentro
// do escopo de onde 'this' está sendo usado

// this é utilizado para referenciar o nome que está dentro
// da função

let usuario = { 
    nome: 'Roberto',
    excluir: function () {
        console.log('O usuario, ' + this.nome + ' foi excluído!')
    }
 }
```

## Aula 13 - Selecionando Elementos do DOM

```jsx
// Selecionar elemento pelo id

let p = document.getElementById('paragrafo1')

// Selecionar elementos por classe

let inputPorClasse = document.getElementsByClassName('tag-de-input')

// Selecionar elementos por tag

let inputPorTag = document.getElementsByTagName('input')

// Selecionar elementos por query. Podendo ser id, classe, atributos ou tag

let inputPorName = document.querySelectorAll("input[name='email']")
```

## Aula 14 - Manipulando HTML

```jsx
// É uma função que adiciona comentários após clicar no botão.
// Ela pega o texto dentro do input pelo seu nome 'novo-comentario' 
// e adiciona um novo parágrafo com aquele texto dentro da div pelo 
// seu id 'novos-comentarios'

function adicionarComentario() {
    let inputComentario = document.getElementsByName('novo-comentario')
    
    let textoDigitado = inputComentario[0].value;

    let novosComentarios = document.getElementById("novos-comentarios")

    novosComentarios.innerHTML += `<p>Novo comentário: ${textoDigitado} </p>`
}
```

## Aula 15 - Manipulando Atributos e Estilos

```jsx
// Manipulando atributos

function marcarRadio(genero) {
    let radioMasculino = document.getElementById('genero-masculino')

    let radioFeminino = document.getElementById('genero-feminino')

    if (genero === 'M') {
        radioMasculino.checked = true
    } else if (genero === 'F') {
        radioFeminino.checked = true
    }
}
```

```jsx
// Manipulando estilos por propriedades diretamente

function alterarCorDeFundoPrimeiroPost() {
    let posts = document.getElementsByClassName('post')

    console.log(posts)

    let primeiroPost = posts[0]
    primeiroPost.style.backgroundColor = 'red'
}

// Manipulando estilos por adição de classes

function aumentarFonteDoSegundoPost() {
    let textPosts = document.getElementsByClassName('texto-post')

    textPosts[1].classList.add('fonte-grande')
}
```

## Aula 16 - Adicionando Eventos

```jsx
// Adicionando um evento no select usando addEventListener

let selectDeEstado = document.querySelector("select[name='estado']")

selectDeEstado.addEventListener('change', function (event) {
    console.log(event.target.value)
})
```

## Exercício 01

<img src="EX-01/Proposta - Exercicio 1.jpg" height="500px" />

## Exercício 02

<img src="EX-02/Proposta - Exercicio 2.jpg" height="500px" />

## Exercício 03

<img src="EX-03/Proposta - Exercicio 3.jpg" height="500px" />

## Exercício 04

<img src="EX-04/Proposta - Exercicio 4.jpg" height="500px" />

## Exercício 05

<img src="EX-05/Proposta - Exercicio 5.jpg" height="500px" />

## Exercício 06

<img src="EX-06/Proposta - Exercicio 6.jpg" height="500px" />