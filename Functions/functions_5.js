// Escreva uma função que recebe dois parâmetros numéricos e retorne o menor número.
// Solicite dois números para o usuário e forneça como argumento para esta função. 
// Escreva o resultado da função na tela dizendo qual menor número.

var rs = require("readline-sync")
var n1 = rs.questionInt("Digite um número: ")
var n2 = rs.questionInt("Digite outro número: ")

function SelecionaMenorNumero() {
    if (n1 > n2){
        console.log(`O menor número é ${n2}`)
    }
    else{
        console.log(`O menor número é ${n1}`)
    }
}
SelecionaMenorNumero()