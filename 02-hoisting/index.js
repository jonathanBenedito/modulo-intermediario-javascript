// Hoisting é quando o js detecta uma variável declarada abaixo de 
// onde foi chamada e traz ela pro topo do código, quaisquer 
// valores atribuídos serão ignorados.
console.log(pais)
var pais = 'Brasil'

// OBS: Funciona apenas com variáveis declaradas como var