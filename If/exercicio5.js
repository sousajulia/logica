var rs = require("readline-sync")
var sexo = rs.question("Você é do sexo masculino ou feminino?")
var altura = rs.question("Qual a sua altura?") 
if (sexo == "masculino") {(console.log("o seu peso ideal é", (72.7* altura) -58))}
else if(sexo == "feminino") {console.log("o seu peso ideal é", (62.1* altura) -44.7)}