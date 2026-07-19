//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  // Your code here
  let DouleChar = ''
  for(let i = 0 ; i < str.length ; i++){
    DouleChar += str[i].repeat(2)
  }
  
  return DouleChar ;
}

console.log(doubleChar("khaled")) ;
