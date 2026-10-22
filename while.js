// while -> Laços (Enquanto)


var contador = 1

while (contador <= 3){
    console.log("Contador: " + contador)
    contador = contador + 1
}

//opção 2
contador = 1
while(true){
    console.log("Contador: " + contador) // 1 -> 2 -> 3

    if (contador == 3){
        break
    }

    contador = contador + 1 // 2 -> 3
}