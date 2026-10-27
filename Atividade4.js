// Imprima todos os números pares de 1 a 20 utilizando um laço de repetição (USANDO O DO WHILE , WHILE E FOR)

//While

var numero = 1

while (numero <= 20) {
    if (numero % 2 == 0) {
        console.log(numero + " é par")
    } numero++
}

//Do Wile

var numero2 = 1

do {
    if (numero2 % 2 == 0) {
        console.log(numero2 + " é par")
    } numero2++
} while (numero2 <= 20);

//For

for (var i = 1; i <= 20; i++ ){
    if(i % 2 == 0)
        console.log(i)
}