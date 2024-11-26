// // Dada una matriz cuadrada, calcule la diferencia absoluta entre las sumas de sus diagonales.

// // Por ejemplo, la matriz cuadradase muestra a continuación:

// // 1 2 3
// // 4 5 6
// // 9 8 9  
// // La diagonal de izquierda a derecha =. La diagonal de derecha a izquierda =Su diferencia absoluta es.

// // Descripción de la función

// // Completa elfunción en el editor a continuación.

// // diagonalDifference toma el siguiente parámetro:

// // int arr[n][m] : una matriz de números enteros
// // Devolver

// // int : la diferencia diagonal absoluta
// // Formato de entrada

// // La primera línea contiene un solo entero,, el número de filas y columnas en la matriz cuadrada.
// // Cada uno de los siguienteslíneas describe una fila,, y consta denúmeros enteros separados por espacios.

// // Restricciones

// // Formato de salida

// // Devuelve la diferencia absoluta entre las sumas de las dos diagonales de la matriz como un solo entero.

// // Entrada de muestra

// // 3
// // 11 2 4
// // 4 5 6
// // 10 8 -12
// // Ejemplo de salida

// // 15
// // Explicación

// // La diagonal primaria es:

// // 11
// //    5
// //      -12
// // Suma en la diagonal primaria: 11 + 5 - 12 = 4

// // La diagonal secundaria es:

// //      4
// //    5
// // 10
// // Suma en la diagonal secundaria: 4 + 5 + 10 = 19
// // Diferencia: |4 - 19| = 15

// // Nota: |x| es el valor absoluto de x

function diagonalDifference(ar) {
    let firstDiagonal = [];
    let secondDiagonal = [];
    for (let i = 0; i < ar.length && i < ar[i].length; i++) {
        firstDiagonal.push(ar[i][i]);
        secondDiagonal.push(ar[i][ar[i].length-1 - i])
    }

    return firstDiagonal,secondDiagonal
}
//Formato entrada
const arrayCuadrada = [
    [11,2, 4],
    [4, 5, 6],
    [10, 8, -12]
]
const array = [
    [6, 6, 7, -10, 9],
    [9, 7, -10, 6, 4],
    [-1, -2, 4, -6, 1],
    [-8, 7, 6, -1, -6],
    [-10, -4, 9, 1, -7],
    [-8, -3, -4, 2, -3,4],
    [-2, -7, -4, 8, 3,5,5],
    [-3, 4, 6, -7, -7,5,5,5],
]

console.log(diagonalDifference(arrayCuadrada))
console.log(diagonalDifference(array))