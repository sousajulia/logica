// Escreva um programa que pedirá para o usuário dois números entre 1e 100. 
// O programa deve, então, iterar de um em um do menor pro maior, sempreimprimindo 
// o número na tela do usuário. Entretanto, caso o número seja divisível por 7,
// o programa deve ao invés disso imprimir a palavra “Ping”. Caso o número seja 
// divisívelpor 5, o programa deve imprimir “Pong”. Caso o número seja divisível 
// por 7 e 5, oprograma deveria imprimir a mensagem “Ping Pong”. 
// Dica: Neste exercício vocês talvezprecisem fazer uso do recurso 
// “user.questionInt()” que transforma o conteúdo de uminput do usuário de string para inteiro

var rs = require("readline-sync")
var n1 = rs.questionInt("Digite um numero entre 1 e 100: ")
var n2 = rs.questionInt("Digite outro um numero entre 1 e 100: ")

while(n1 <= n2){   
     if(n1%5 == 0 && n1%7 == 0){
        console.log("PINGPONG")
     }
    if(n1%7 == 0){
    console.log("PING") 
   } 
   else if(n1%5 == 0){
       console.log("PONG")}

 
    
     
else{
        console.log(n1)
       }
    n1++

       }
