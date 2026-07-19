// convert number to reversed array 39546 => [6,4,5,9,3]

function convertNumberToReversedArray(number){
    return number.toString().split("").map((m)=> Number(m)).reverse()
}

console.log(convertNumberToReversedArray(39546) );