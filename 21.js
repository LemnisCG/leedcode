// Paso Sacar el MCD con el algoritmo de euclides:
    // Tomar dos numeros enteros donde a es mayor o igual a b
    // asignar b en una variable temporal 
    // almacenar en b = el residuo de a entre b
    // Sustituir a con la variable temporal 
    // Repetir hasta que el el menor de los numero enteros en esta caso b sea 0
    // retornar a
function getMCD(a,b) {
    while (b !== 0) {
        
        const temp = b; // 96 // 16
        b = a % b; // 16 / 0
        a = temp; // 96 / 16
    }
    return a
}

function getMCM(a,b) {
    return (a * b) / getMCD(a,b) // 2 / 1 = 2
}
let count = 0;
const array1 = [2,4];
const array2 = [16,32,96]
const rangoA = array1.reduce((acc,val) => getMCM(acc,val))
const rangoB = array2.reduce((acc,val) => getMCD(acc,val), array2[0])

for (let i = rangoA;  i <= rangoB; i++) {
    const cumpleA = array1.every((num) => i % num === 0);
    const cumpleB = array2.every((num) => num % i === 0);

    if(cumpleA && cumpleB) {
        count++
    }
}

console.log(count)
