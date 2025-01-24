function breakingRecords(scores) {
    let countMaximo = 0;
    let countMinimo = 0
    let tempMax = [scores[0]]
    let tempMin = [scores[0]]
    for (let i = 1; i < scores.length; i++) {
        if(tempMax < scores[i]) {
            tempMax = scores[i]
            countMaximo++
        }
        else if (tempMin > scores[i]) {
            tempMin = [scores[i]]
            countMinimo++
        }
    }   

    return [countMaximo , countMinimo]

}


const scoresArray = [3,4,21,36,10,28,35,5,24,42]
console.log(breakingRecords(scoresArray))
// let count = 0
// let temp = scoresArray[0]
// if(temp < scoresArray[0 + 1]) {
//     temp = scoresArray[0 + 1] 
//     console.log(temp)
//     count++
    
// }
// if(temp < scoresArray[1 +1]) {
//     temp = scoresArray[1 + 1]
//     console.log(temp)
//     count++
// }
// if(temp < scoresArray[2 +1]) {
//     temp = scoresArray[2+1]
//     console.log(temp)

//     count++
// }
// if(temp < scoresArray[3 +1]) {
//     temp = scoresArray[3+1]
//     console.log(temp)


//     count++
// }
// if(temp < scoresArray[4 +1]) {
//     temp = scoresArray[4+1]
//     console.log(temp)

    
//     count++
// }
// if(temp < scoresArray[5 +1]) {
//     temp = scoresArray[5+1]
//     console.log(temp)


//     count++
// }
// if(temp < scoresArray[6 +1]) {
//     temp = scoresArray[6+1]
//     console.log(temp)


//     count++
// }
// if(temp < scoresArray[7 +1]) {
//     temp = scoresArray[7+1]
//     console.log(temp)
    
//     count++

// }

// if(temp < scoresArray[8 +1]) {
//     temp = scoresArray[8+1]
//     console.log(temp)

//     count++
// }


// console.log(count)