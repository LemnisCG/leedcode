// Dado un conjunto de números enteros, calcule las razones de sus elementos que son positivos , negativos y cero . Imprima el valor decimal de cada fracción en una nueva línea conlugares después del decimal.

// Nota: Este desafío presenta problemas de precisión. Los casos de prueba están escalados a seis decimales, aunque las respuestas con un error absoluto de hastason aceptables

// Ejemplo

// Hayelementos, dos positivos, dos negativos y uno cero. Sus proporciones son,yLos resultados se imprimen como:

// 0.400000
// 0.400000
// 0.200000
// Descripción de la función

// Complete la función plusMinus en el editor a continuación.

// plusMinus tiene los siguientes parámetros:

// int arr[n] : una matriz de números enteros
// Imprimir
// Imprima las proporciones de los valores positivos, negativos y cero en la matriz. Cada valor debe imprimirse en una línea separada condígitos después del decimal. La función no debe devolver ningún valor.

// Formato de entrada

// La primera línea contiene un número entero,, el tamaño de la matriz.
// La segunda línea contienenúmeros enteros separados por espacios que describen.

// Restricciones



// Formato de salida

// Imprima lo siguientelíneas, cada una adecimales:

// proporción de valores positivos
// proporción de valores negativos
// proporción de ceros
// Entrada de muestra

// STDIN           Function
// -----           --------
// 6               arr[] size n = 6
// -4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
// Ejemplo de salida

// 0.500000
// 0.333333
// 0.166667
// Explicación

// Haynúmeros positivos,números negativos, ycero en la matriz.
// Las proporciones de ocurrencia son positivas: , negativo: y ceros: .

// Que nos piden
// Paso 1: Determinar los numeros positivos, negativos y ceros, que hay en un array
// Paso 2: Dividir los numeros positivos,negativos y ceros de un array, con la longitud del array

const array = [-4,3,-9,0,4,1];
const array2 = [0, 0, -1, 1, 1];
const array3 = [1, 2, 3, -1, -2, -3, 0, 0]

// if(array[0] < 0) {
//     numNegativos.push(array[0])
// }
// if(array[1] > 0) {
//     numPositivos.push(array[1])
// }
// if(array[3] >= 0) {
//     ceros.push(array[3])
// }


function plusMinus(arr) {
    let numPositivos = 0;
    let numNegativos = 0;
    let ceros = 0;
    let valoresPositivos = 0;
    let valoresNegativos = 0;
    let valoresCeros = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            numNegativos++;
        }
        else if (arr[i] === 0) {
            ceros++;
        } else {
            numPositivos++;
        }
    }
    valoresNegativos = numPositivos / arr.length
    valoresPositivos = numNegativos / arr.length
    valoresCeros = ceros / arr.length

    const proporciones = [valoresNegativos,valoresPositivos,valoresCeros];

    for(let i = 0; i < proporciones.length; i++) {
        console.log(proporciones[i].toFixed(6))
    }

}
// plusMinus(array)
// plusMinus(array2)
plusMinus(array3)