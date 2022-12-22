# Índice das Aulas Javascript Básico
📄 Link de acesso aos <a href="https://cord-delivery-7eb.notion.site/Javascript-Intermedi-rio-fc28db16ddf744ef8b7ec4f72138c7dd">resumos</a>. 

🖼 Link de acesso a <a href="#">página</a>.

<!-- TABLE OF CONTENTS -->
## Conteúdo
<ul>
    <li>
        <a href="#aula-01---escopos-do-javascript">Aula 01 - Escopos do Javascript</a>
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
