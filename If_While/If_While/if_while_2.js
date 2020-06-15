//Faça um programa que leia dois números, o primeiro é o valor inicial de um contador, e
//o segundo é o valor final do contador (verifique se o valor inicial fornecido é inferior ao
//valor final). Usando o comando For, escreva na tela uma contagem que comece no
//primeiro número lido, escreva os números seguintes colocando apenas um número em
//cada nova linha da tela, até chegar ao valor final indicado.
let rs = require("readline-sync")
let n1 = rs.questionInt("Digite um número inicial: ")
let n2 = rs.questionInt("Digite número final: ")
console.log("Contagem:")
for (i= n1; i <= n2 ; i++){console.log(i)
}
console.log("Fim da contagem")