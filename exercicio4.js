var rs = require("readline-sync")
var numero = rs.question("Quantas maçãs você deseja comprar?")
if (numero < 12) {console.log( "O valor é ", numero * 0.30)}
else {console.log( "O valor é", numero * 0.25)}