// Imprima todos os números IMPARES de 1 a 50 utilizando um laço de repetição (USANDO O DO WHILE, WHILE E FOR).

//WHILE

var num1 = 1

while(num1 <= 50){
    if(num1 % 2 >= 1){
        console.log(num1)
} num1++
}

// Do While

var num = 1

do{
    if (num % 2 >= 1){
        console.log(num)
    }num++
}while (num <= 50)

// For

for(var i = 1; i <= 50; i++ ){
    if (i % 2 >= 1)
        console.log(i)
}