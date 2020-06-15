// Faça um programa que lê o arquivo carro.json utilizando a biblioteca e ‘fs’ 
// para ler o arquivo e após isso utilize o método JSON.parse para deserializar o objeto em string.  
// Após isso imprima os valores lidos do json do arquivo.
// OBS: altere o arquivo salve e rode o programa novamente e veja os dados sendo mudados a cada execução.

const fs = require("fs")
var jsonserializado = fs.readFileSync('/Projetos/GIT/logica/Objects/carro.json')
var carro = JSON.parse(jsonserializado)
console.log(carro)