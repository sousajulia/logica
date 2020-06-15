const axios = require("axios")
axios.get("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
.then(function (resposta){console.log(resposta.data)})