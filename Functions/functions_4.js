// Faça uma função que recebe, por parâmetro, um valor N e calcula e escreve a 
// tabuada de 1 até 9. Mostre a tabuada na forma:
// 1 x N = N
// 2 x N = 2N
// ...
// 9 x N = 9N
var rs = require("readline-sync")
var N = rs.questionInt("Digite um número pra fazer a tabuada: ")

function FazTabuada() {
    for (i=1; i <= 9; i++){
        var x = i*N 
        console.log(`${i} x ${N} = ${x}`)
    }
}
FazTabuada()