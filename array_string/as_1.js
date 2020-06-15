// Faça um algoritmo que receba o nome de dois jogadores e após isso peça 5 números 
// de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o jogador B. 
// Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números 
// iguais que o jogador A e B colocaram.
var rs = require("readline-sync")
var j1 = rs.question("Digite o nome do primeiro jogador: ")
var j2 = rs.question("Digite o nome do segundo jogador: ")
var nj1 = []
var nj2 = []

PegaNumeroJogador1()
PegaNumeroJogador2()

function PegaNumeroJogador1()
{for(i=1; i <= 5; i++){
    var n = rs.questionInt(`${j1} Digite um número: `)
nj1.push(n)}}
function PegaNumeroJogador2()
{for(i=1; i <= 5; i++){
    var n = rs.questionInt(`${j2} Digite um número: `)
nj2.push(n)}}

for(var i = 0; i < nj1.length; i++){
    if (nj2.includes(nj1[i])){
        var iguais = []
        iguais.push(nj1[i])
    }}
    
for(var i = 0; i < nj2.length; i++){
        if (nj1.includes(nj2[i])){
            iguais.push(nj2[i])
        }
    }
console.log(iguais)