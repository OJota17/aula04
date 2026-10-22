// 1- Faça um laço que imprima o seu nome 15 vezes

var contador = 1

while (contador <= 15){
    console.log("João Pedro")
    contador = contador + 1
}

// 2- Faça um laço que imprima o calculo da tabuada que foi escolhido pelo usuario.

var num1 = 2
var tabuada = 1
var resultado = 0

while (tabuada <= 10){
    resultado = num1 * tabuada
    console.log(num1, "X", tabuada, "=", resultado)
    tabuada = tabuada + 1
}