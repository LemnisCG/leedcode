const bill = [72,53,60,66,90,62,12,31,36,94];
const k = 6;
const b = 288;
// let acc =0 ;

// for (let i = 0; i < bill.length; i++) {
//     if(bill[i] !== bill[k]) {
//         acc += bill[i]
//     }
// }

// const billAnna = acc / 2;

// if (b === billAnna) {
//     console.log("Bon Appetit");
// }


// const howMuchDidAnnaEat = bill.filter((num) => num !== bill[k]).reduce((acc,val) => acc + val,0)
// const annaBill = howMuchDidAnnaEat / 2;

// if (b === annaBill) {
//     console.log("Bon  Appetit");
// } else {
//     console.log(b - annaBill);
// }


function bonAppetit(bill,k,b) {
    const howMuchDidAnnaEat = bill.reduce((acc,val,idx) => (
        idx === k ? acc : acc + val
    ), 0)
    const annaBill = howMuchDidAnnaEat / 2;
    let amountMore = 0
    if (b === annaBill) {
        return "Bon Appetit";
    } else {
        amountMore = b - annaBill
    }
    return amountMore    
}

console.log(bonAppetit(bill,k,b))