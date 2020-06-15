var fs = require("fs");
var json = fs.readFileSync("/Projetos/GIT/logica/arrow_function/cars.json");
var carros = JSON.parse(json);

var carrosdojapao= carros.filter((carro) => {
    return carro.Origin == "Japan";
    })

console.log(carrosdojapao)
