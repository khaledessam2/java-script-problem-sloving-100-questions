// function squareOrSquareRoot(array) {
//   let newArray = [] ;
//     array.forEach((element) => {
//       if(Number.isInteger(Math.sqrt(element)) ){
//         newArray.push(Math.sqrt(element))
//       }else{
//         newArray.push(Math.pow(element , 2))
//       }
//     })
    
//     return newArray
// }

function squareOrSquareRoot(array) {
  return array.map((element) =>  Number.isInteger(Math.sqrt(element)) ? Math.sqrt(element) : Math.pow(element , 2))
}

console.log(squareOrSquareRoot([4,3,9,7,2,1]))