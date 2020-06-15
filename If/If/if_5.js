// Escreva um programa para ler 3 valores inteiros (considere que  nãoserão lidos valores iguais) 
// e escrevê-los em ordem crescente

var rs = require("readline-sync")
var valor1 = rs.questionInt("Digite o primeiro valor") 
var valor2 = rs.questionInt("Digite o segundo valor") 


if(valor2 == valor1){
    console.log("Não são permitidos números iguais, digite novamente: ")
    var valor2 = rs.questionInt("Digite o segundo valor") 
    var valor3 = rs.questionInt("Digite o terceiro valor") 
    if(valor3 == valor2){
        console.log("Não são permitidos números iguais, digite novamente: ")
        var valor3 = rs.questionInt("Digite o terceiro valor") }
}

else {
    var valor3 = rs.questionInt("Digite o terceiro valor") 
    if(valor3 == valor2){
        console.log("Não são permitidos números iguais, digite novamente: ")
        var valor3 = rs.questionInt("Digite o terceiro valor") }
}

var valores = [valor1, valor2, valor3]

console.log(valores.sort())

