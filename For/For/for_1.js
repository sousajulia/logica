var rs = require("readline-sync")
var palavra = rs.question("digite uma palavra: ")
tamanhopalavra = palavra.length

for (var i = 0; i < tamanhopalavra; i++){
    if (palavra.charAt(i) == "a") console.log(palavra.charAt(i).toUpperCase())
    if (palavra.charAt(i) != "a") console.log(palavra.charAt(i))
}

