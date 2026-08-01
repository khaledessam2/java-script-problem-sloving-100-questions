// function NoSpace(string){
//   return string.split("").filter((element)=> element!= false).join("") ;
// }


//  Anothor solution
function NoSpace(string){
  return string.split(" ").join("") ;
}

console.log(NoSpace("  kh al e d   "))

