// 1- Faça um laço que imprima seu nome 15 vezes

var contador = 1

for (var i = 1; i <= 15; i++){
    console.log("João Pedro x " + i)
}

// 2- Faça um laço que imprima o calculo da tabuada que foi escolhido pelo usuario.

var num1 = 6
var tabuada = 1
var resultado = 0

for (var tabuada = 1; tabuada <= 10; tabuada++){
    resultado = num1 * tabuada
    console.log(num1, "X", tabuada, "=", resultado)
}