var senha = 1234
var rs = require("readline-sync")
var numero = rs.question("Digite a senha.")
if (numero == senha) { console.log(" Sua senha está correta")}
else { console.log("Senha incorreta, tente novamente.")}