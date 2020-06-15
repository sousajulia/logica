// Escreva um programa que calcule a soma de todos os múltiplos de 3 e de 5 entre 1 e 1000. 
var i = 1
while(i <= 1000){
    if (i%3 == 0 && i%5 == 0){
        var numeros = []
        numeros.push(i)
    }
i++
}
cont = 0 
while(cont < numeros.length){
var numero = numeros[cont]
var soma = numeros[cont] + numero
cont++
}
console.log(soma)

