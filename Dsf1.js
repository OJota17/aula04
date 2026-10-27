// Imprima os primeiros 10 números da sequência de Fibonacci utilizando um laço de repetição.

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34

var antecessor = 0
var anterior = 1

for(var i = 2; i < 10; i++) {
    var atual = antecessor + anterior
    console.log(atual)
    var help = antecessor
    antecessor = anterior
    anterior = atual

}
// var atual = antecessor + anterior
// var help = antecessor
// var antecessor = anterior
// var anterio = atual
// var atual = antecessor + anterior