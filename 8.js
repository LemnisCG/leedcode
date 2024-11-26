// Alice y Bob crearon un problema cada uno para HackerRank. Un revisor califica los dos desafíos y otorga puntos en una escala de 1 a 100 para tres categorías: claridad del problema , originalidad y dificultad .

// La calificación para el desafío de Alice es el triplete a = (a[0], a[1], a[2]) , y la calificación para el desafío de Bob es el triplete b = (b[0], b[1], b[2]) .

// La tarea es encontrar sus puntos de comparación comparando a[0] con b[0] , a[1] con b[1] y a[2] con b[2] .

// Si a[i] > b[i] , entonces Alice recibe 1 punto.
// Si a[i] < b[i] , entonces Bob recibe 1 punto.
// Si a[i] = b[i] , entonces ninguna persona recibe un punto.
// Los puntos de comparación son el total de puntos que una persona ganó.

// Dados a y b , determine sus respectivos puntos de comparación.

// Ejemplo

// a = [1, 2, 3]
// b = [3, 2, 1]

// Para los elementos *0*, Bob recibe un punto porque a[0] .
// Para los elementos iguales a[1] y b[1] , no se obtienen puntos.
// Finalmente, para los elementos 2 , a[2] > b[2] por lo que Alicia recibe un punto.
// La matriz de retorno es [1, 1] con la puntuación de Alice primero y la de Bob segundo.

// Descripción de la función

// Complete la función compareTriplets en el editor a continuación.

// compareTriplets tiene los siguientes parámetros:

// int a[3] : Calificación del desafío de Alice
// int b[3] : Calificación del desafío de Bob
// Devolver

// int[2] : la puntuación de Alice está en la primera posición y la puntuación de Bob está en la segunda.
// Formato de entrada

// La primera línea contiene 3 números enteros separados por espacios, a[0] , a[1] y a[2] , los valores respectivos en el triplete a .
// La segunda línea contiene 3 números enteros separados por espacios, b[0] , b[1] y b[2] , los valores respectivos en el triplete b .

// Restricciones

// 1 ≤ a[i] ≤ 100
// 1 ≤ b[i] ≤ 100
// Entrada de muestra 0

// 5 6 7 
// 3 6 10
// Ejemplo de salida 0

// 1 1

function compareTriplets(a,b) {
    const puntos = [];
    let alice = 0;
    let bod = 0;
    for(let i = 0; i < a.length; i++ ) {
        if(a[i] > b[i]) {
            alice += 1
            // puntos.push(alice)
        }
        else if (a[i] < b[i]) {
            bod += 1
            // puntos.push(bod)

        }

    }

    puntos.push(alice)
    puntos.push(bod)

    return puntos
}



console.log(compareTriplets([5, 6, 7 ],[3, 6, 10]))
console.log(compareTriplets([17, 28, 30],[99, 16, 8]))