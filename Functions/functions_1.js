// Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu
// volume (v = 4/3.pi.R3). Então solicite ao usuário o raio e a esfera e utilize
// a função para exibir o resultado.

function CalculaRaio () {
    v = [(4/3)*3.14*(Math.pow(R,3))]
    return v
}
var rs = require("readline-sync")
R = rs.questionInt("Digite o valor do raio: ")
CalculaRaio(R)
console.log(v)