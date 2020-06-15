// Faça uma função que recebe a idade de uma pessoa em anos, meses e dias 
// e retorna essa idade expressa em dias.
// Solicite a data ao usuário e o algoritmo imprime a quantidade de dias 
// como resultado utilizando a função criada.

var rs = require("readline-sync")
var anos = rs.questionInt("Quantos anos você tem? ")
var meses = rs.questionInt("Quantos meses? ")
var dias = rs.questionInt("Quantos dias? ")

function ConverteEmDias() {
    a = anos*365
    m = meses*30
    soma = a + m + dias
    return soma
}
ConverteEmDias()
console.log(`Você tem ${soma} dias de idade`)