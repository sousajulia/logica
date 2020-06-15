const axios = require("axios")
var rs = require("readline-sync")
var episodios = rs.question("digite o numero do episodio")

axios.get(`https://www.breakingbadapi.com/api/episodes/${episodios}`)
.then(function (resposta) {
    console.log(resposta.data)})