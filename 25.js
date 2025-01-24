const arr = [1,1,2,2,3];
let tipo1 = 0;
let tipo2 = 0;
let tipo3 = 0;
let tipo4 = 0;
let tipo5 = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 1) {
        tipo1++
    }
    else if(arr[i] === 2) {
        tipo2++
    }
    else if(arr[i] === 3) {
        tipo3++
    }
    else if(arr[i] === 4) {
        tipo4++
    }
    else if(arr[i] === 5) {
        tipo5++
    } else {
        return "No hay mas tipos"
    }
}

const tipos = [tipo1,tipo2,tipo3,tipo4,tipo5]

let maxVal = 0 // 2 
let countMaxType = 0
console.log(countMaxType)
for(let i = 0; i < tipos.length; i++) {
    if(tipos[i] > maxVal) {
        countMaxType = i + 1 
        maxVal = tipos[i] // 2 // 3 // 
    }
}
console.log(countMaxType)
// let types = [0,0,0,0,0];
    
// for(let bird of arr){
//     types[bird-1]++;    
// }
