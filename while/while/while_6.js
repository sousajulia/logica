var rs = require("readline-sync")
var palavra = rs.question("escreva uma palavra")
var i = (palavra.length -1)
while(i >= 0){
    console.log (palavra.charAt(i)) 
    i--
}