const axios = require("axios")
var rs = require("readline-sync")
var cep= rs.question("digite o cep")

axios.get(`https://api.postmon.com.br/v1/cep/${cep}`)
.then(function (resposta) {
    console.log(resposta.data)})