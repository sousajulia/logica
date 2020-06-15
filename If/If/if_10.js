// Faça um programa que receba três notas, calcule e mostre a média aritmética entreelas, 
// caso a média aritmética seja:Media maior ou igual a 7 imprimir : ALUNO APROVADO
// Media menor que 7 imprimir : ALUNO REPROVADO

var rs = require("readline-sync")
var nota1 = rs.questionInt("Digite a primeira nota: ")
var nota2 = rs.questionInt("Digite a segunda nota: ")
var nota3 = rs.questionInt("Digite a terceira nota: ")

var media = (nota1 + nota2 + nota3)/3
console.log(media)

if (media >= 7){
    console.log("ALUNO APROVADO")
}
if (media < 7){
    console.log("ALUNO REPROVADO")
}
