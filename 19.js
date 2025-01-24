function mcd(a,b)  {
    return b === 0 ? a : mcd(b, a % b);
}


function getMCD(a,b) {
    for(let i = 1; i <= a; i++) {
        if (b === 0) return a;
        const temp = b;  //18 // 12 // 6
        b = a % b; // 12 // 6 // 0
        a = temp; // 18 // 12 // 6
    }
    return a;
}


function mcm(a, b) {
    return (a * b) / mcd(a, b);
}

console.log(mcm(2, 4)); // 24

