//var //variavel escopo global funciona fora do escopo
//let //variavel escopo local funciona apenas dentro do escopo
//const //constante, rara de se utilizar

/*
    linguagem case sensitive: diferencia letras maiusculas e minusculas
    por tag: getElementByTagName()
    por Id: getElementById()
    por nome: getElementsByName() //Elements pois cria
    por classe: getElementsByClassName()
    por seletor: querySelector() //melhor pratica pra acessar o DOM
    */
let nome = window.document.getElementsById('nome'); // se colocar no getById o # NÃO VAI FUNCIONAR
let email = document.querySelector('inputemail'); // #email para id ou input.email para classe
let assunto = document.querySelector('#assunto'); //NO QUERY É OBRIGADTÓRIO COLOCAR #

email.style.width'100%'

