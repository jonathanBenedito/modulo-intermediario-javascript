// Selecionar elemento pelo id

let p = document.getElementById('paragrafo1')

console.log(p)

// Selecionar elementos por classe

let inputPorClasse = document.getElementsByClassName('tag-de-input')

console.log(inputPorClasse)

// Selecionar elementos por tag

let inputPorTag = document.getElementsByTagName('input')

console.log(inputPorTag)

// Selecionar elementos por query, podendo ser id, classe, atributos ou tag

let inputPorName = document.querySelectorAll("input[name='email']")

console.log(inputPorName)