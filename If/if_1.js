var rs = require("readline-sync")
var idade = rs.question("Qual a sua idade?")
if(idade <16) {console.log("Você não pode votar.")}
else if (idade>65){console.log("voce pode votar mas nao e obrigado")}
else if(idade>=18) {console.log("voce e obrigado a votar")}
else {console.log("voce pode votar mas nao e obrigado")}