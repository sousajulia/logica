// Adicione no programa anterior, após a impressão dos dados, a funcionalidade 
// de salvar o objeto carro em formato JSON. 
// Utilize o JSON.stringify para transformar o objeto em string e após isso 
// utilize os métodos da biblioteca ‘fs’ para salvar o arquivo.
// Salve o json como ‘carro.json’

var rs = require("readline-sync")
var fs = require("fs")
var cor = rs.question("Digite a cor do carro: ")
var modelo = rs.question("Digite o modelo do carro: ")
var marca = rs.question("Digite a marca do carro: ")

var Carro = new Object()
Carro.cor = cor
Carro.modelo = modelo 
Carro.marca = marca

console.log(Carro)

var salvar = rs.question("Deseja salvar esse carro?S/N ")
if(salvar = "S"){
    var objserializado = JSON.stringify(Carro)
    var caminhodoarquivo = '/Projetos/GIT/logica/Objects/carro.json'
    fs.writeFileSync(caminhodoarquivo, objserializado)
}
