// for(let i = 1700; i < 2700; i++) {
//     if(i === 1918) {
//         console.log("26.9." + i)
//     }
//     else if(calendaryGregoriano(i) || calendaryJuliano(i)) {
//         console.log("12/9/" + i) 
//     } 
//     else {
//         console.log("13/9/" + i)
//     }
    
// }
// function calendaryGregoriano(year) {
//     if(year > 1918) {
//         return (year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0);
//     }
// }

function calendaryJuliano(year) {
    if(year < 1918) {
        return (year % 4 === 0)
    }
}

if( calendaryJuliano(1800)) {
    console.log("12.09.1800")
}

console.log(calendaryJuliano(1800))