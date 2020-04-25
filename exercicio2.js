var rs = require("readline-sync")
var numero = rs.question("Digite um número.")
if(numero%2 == 0) { console.log ("esse é um número par")}
else{ console.log ("esse número é impar")}