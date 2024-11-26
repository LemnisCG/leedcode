// Estás a cargo de la torta para el cumpleaños de un niño. Has decidido que la torta tendrá una vela por cada año de su edad total. Solo podrán apagar la vela más alta. Cuenta cuántas velas son más altas.

// Ejemplo


// La altura máxima de las velas esunidades de altura. HayDe ellos, así que regresa.

// Descripción de la función

// Complete la función birthdayCakeCandlesen el editor a continuación.

// birthdayCakeCandles tiene los siguientes parámetros:

// int candles[n] : las alturas de las velas
// Devoluciones

// int : el número de velas más altas
// Formato de entrada

// La primera línea contiene un solo entero,, el tamaño deLa
// segunda línea contieneenteros separados por espacios, donde cada enterodescribe la altura de.

// Restricciones

// Entrada de muestra 0

// 4 
// 3 2 1 3
// Ejemplo de salida 0

// 2
// Explicación 0

// Las alturas de las velas sonLas velas más altas sonunidades, y hayde ellos.
const arr = [3,1,2,3];
const max = Math.max(...arr);

const numVelasAltas = arr.filter((value) => value === max)
console.log(numVelasAltas.length)
