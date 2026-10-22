// 1- Faça um laço que imprima seu nome 15 vezes

var i = 1
do{
    console.log("Meu nome é João Pedro x " + i)
    i++
} while (i <= 15)

// 2- Faça um laço que imprima o calculo da tabuada que foi escolhido pelo usuario.

var numeroUsuario = 8
var i = 1
do {
    var resultado = (numeroUsuario * i)
    console.log(numeroUsuario + "X" + i + "=" + resultado)
    i++
} while (i <= 10)