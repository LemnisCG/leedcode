// En este desafío, se requiere calcular e imprimir la suma de los elementos de una matriz, teniendo en cuenta que algunos de esos números enteros pueden ser bastante grandes.

// Descripción de la función

// Complete la función aVeryBigSum en el editor que aparece a continuación. Debe devolver la suma de todos los elementos de la matriz.

// aVeryBigSum tiene los siguientes parámetros:

// int ar[n] : una matriz de números enteros.
// Devolver

// largo : la suma de todos los elementos de la matriz
// Formato de entrada

// La primera línea de la entrada consta de un número enteroLa siguiente
// línea contienenúmeros enteros separados por espacios contenidos en la matriz.

// Formato de salida

// Devuelve la suma entera de los elementos de la matriz.

// Restricciones


// Entrada de muestra

// 5
// 1000000001 1000000002 1000000003 1000000004 1000000005
// Producción

// 5000000015
// Nota:

// El rango del entero de 32 bits es.

// Cuando sumamos varios valores enteros, la suma resultante puede superar el rango anterior. Es posible que deba utilizar long int C/C++/Java para almacenar dichas sumas.

//Devolver la suma de todo los elemento de una matriz
async function aVeryBigSum(ar) {
    let sumTotalMatriz = 0;
    for(let i = 0; i < ar.length; i++){
       sumTotalMatriz += ar[i]
    }

    return sumTotalMatriz
}

//Entrada de muestra
const arrayNums = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
const arrayBigNums = [1001458909, 1004570889, 1007019111, 1003302837, 1002514638, 1006431461, 1002575010, 1007514041, 1007548981, 1004402249]
console.log(aVeryBigSum(arrayNums))
console.log(aVeryBigSum(arrayBigNums))
