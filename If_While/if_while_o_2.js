// Escreva um programa que passe por todos os números de 1 a 50 epara cada um deles 
// imprima na tela se o número é par ou ímpar. Caso o número também seja primo, 
// o programa deve dizer que ele é primo. (um número primo é um número que só é 
// divisível por ele mesmo e por 1). Dica: Neste exercício você pode precisar 
// de ajuda do operador MÓDULO (%). Você também pode precisar criar mais deum loop.

var numero = 1

while (numero <= 50) {
    if (numero == 2){
        console.log(numero + " PAR PRIMO")
    }
    else if (numero % 2 == 0) {
        console.log(numero + " PAR")
    


    }
    if (numero % 2 != 0) {
    
        var temdivisor = false
        for (i = 2; i < numero; i++) {
            if (numero % i == 0) {
                temdivisor = true
            }
        }  
        if (temdivisor == false) {
          console.log(numero + " ÍMPAR PRIMO")
        }
        else console.log(numero + " ÍMPAR")
    }
    numero++
}
