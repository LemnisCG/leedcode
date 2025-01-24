

const s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
const d = 18; // Suma objetivo
const m = 7;  // Longitud del segmento

function countSegments(s, d, m) {
    let count = 0;

    for (let i = 0; i <= s.length; i++) {
        let sum = 0;
        for (let j = 0; j < m; j++) {
            sum += s[i + j];
        }

        if (sum === d) {
            count++;
        }
    }

    return count;
}

console.log(countSegments(s, d, m)); // Resultado esperado
