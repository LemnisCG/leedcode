// Dados cinco números enteros positivos, encuentre los valores mínimo y máximo que se pueden calcular sumando exactamente cuatro de los cinco números enteros. Luego imprima los valores mínimo y máximo respectivos como una sola línea de dos números enteros largos separados por espacios.

// Ejemplo

// La suma mínima esy la suma máxima esLa función imprime

// 16 24
// Descripción de la función

// Complete la función miniMaxSum en el editor a continuación.

// miniMaxSum tiene los siguientes parámetros:

// arr : una matriz denúmeros enteros
// Imprimir

// Imprima dos números enteros separados por espacios en una línea: la suma mínima y la suma máxima dedeelementos.

// Formato de entrada

// Una sola línea de cinco números enteros separados por espacios.

// Restricciones


// Formato de salida

// Imprima dos números enteros largos separados por espacios que indiquen los valores mínimo y máximo respectivos que se pueden calcular sumando exactamente cuatro de los cinco números enteros. (El resultado puede ser mayor que un número entero de 32 bits).

// Entrada de muestra

// 1 2 3 4 5
// Ejemplo de salida

// 10 14
// Explicación

// Los números son,,,, yCalcula las siguientes sumas utilizando cuatro de los cinco números enteros:

// Suma todo excepto, la suma es.
// Suma todo excepto, la suma es.
// Suma todo excepto, la suma es.
// Suma todo excepto, la suma es.
// Suma todo excepto, la suma es.
// Consejos: ¡Cuidado con el desbordamiento de números enteros! Utilice números enteros de 64 bits.

const arr = [7, 69, 2, 221, 8974]

let sumMax = 0 
let sumMin = 0;
let short = arr.sort((a, b)=> a - b)
for(let i = 0; i < short.length - 1; i++) {
    sumMin +=  arr[i]
}
for(let i = 1; i < short.length; i++) {
    sumMax +=  arr[i]
}


console.log(sumMin, sumMax)
