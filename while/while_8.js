var rs = require("readline-sync")
var opcao = rs.question("Digite A para sair ou B para realizar uma soma")

while (opcao == "A") {
    break
}

while (opcao == "B") {
    var n1 = rs.questionInt("Digite o primeiro numero para realizar a soma: ")
    var n2 = rs.questionInt("digite o segundo numero: ")
    var resultado = parseInt(n1) + parseInt(n2)
    console.log(resultado, "deseja realizar mais uma soma?")
    
    }



while (opcao != "A" && opcao != "B") {
    console.log("Não entendi, tente novamente")
    rs.question("Digite A para sair ou B para realizar uma soma")
}
