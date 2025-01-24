const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let seRepiten = 1
let count = 0
for (let i = 0; i < ar.length; i++) {
    for(let j = i; j < ar.length; j++) {
        if(ar[i] === ar[j + 1]) {
            seRepiten++;
        }
    }
    if(seRepiten % 2 === 0) {
        count++
        seRepiten = 1
    }
}


function sockMerchant(n, ar) {
    const lonelySock = new Set([ar[0]]); 
    let counter = 0;
    for (let i = 1; i < ar.length; i++) {
        const currentVaL = ar[i];
        if (lonelySock.has(currentVaL)) { 
            counter++; 
            lonelySock.delete(currentVaL) 
            console.log(lonelySock)
        } else {
            lonelySock.add(currentVaL) 
            console.log(lonelySock)
        }
    }
    return counter;
}
console.log(sockMerchant(0,ar))