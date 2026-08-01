// function reverseWord(string){
//   let newArray = [] ;
//   let ArrayOfString = string.trim().split(" ")
//   for(let i = 0 ; i<ArrayOfString.length ; i++){
//     newArray.unshift(ArrayOfString[i]);
//   }
  
//   return newArray.join(" ") ;
// }


// Another solution

function reverseWord(string){
  return string.trim().split(" ").reverse().join(" ") ;
}

console.log(reverseWord("   theres. Hi"));