// Escreva um programa para ler o número de lados de um polígono regular e a medida do
//lado (em cm). Calcular e imprimir o seguinte:
//− Se o número de lados for igual a 3 escrever TRIÂNGULO e o valor da área
//− Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área.
//− Se o número de lados for igual a 5 escrever PENTÁGONO.

var rs = require("readline-sync")

var lados = rs.question("Quantos lados tem o polígono?")

if(lados == 3) {
    console.log("É um triângulo")
    var lado = rs.question("Digite a medida do lado(em cm): ")
    console.log("a área do seu triângulo é: ", lado*lados)
}
else if(lados == 4) {
    console.log("É um quadrado")
    var lado = rs.question("Digite a medida do lado(em cm): ")
    console.log("a área do seu quadrado é: ", lado*lados)
  
}
else if(lados == 5) {
    console.log("É um pentágono")
    var lado = rs.question("Digite a medida do lado(em cm): ")
    console.log("a área do seu pentagono é: ", lado*lados)
}
else{
console.log("Não aceitamos essa quantidade de lados, tente novamente")
}