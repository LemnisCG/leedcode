const ar = [1, 3, 2, 6, 1, 2];
const a = ar.length;
const k = 3;
let count = 0;

// if((ar[1] + ar[2]) % k === 0 ) {
//     count++
// }
for (let i = 0; i < a; i++) {
    for(let j = i; j < a; j ++) {
        if((ar[i] + ar[j + 1]) % k === 0) {
            count++ 
        }
    }
}
// console.log(count);

console.log(count)