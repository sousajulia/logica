var rs = require("readline-sync")
var numero = rs.questionInt("Digite um numero para saber seus divisores")
var i = numero
while(i >= 0){
    var resto = numero % i;
    if(resto == 0){console.log(i)}
    i--
}