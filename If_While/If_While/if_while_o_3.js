// Escreva um programa javascript para escrever o seguinte padrão na tela, 
// com N linhas: ** ** * ** * * ** * * * * Onde N é um número maior que zero 
// determinado pelo usuário (no exemplo, N=5)

var rs = require("readline-sync")
var N = rs.questionInt("Digite um número: ")
var NL = N
i = 0
while(i <= N){
    console.log("*")
    i++
}