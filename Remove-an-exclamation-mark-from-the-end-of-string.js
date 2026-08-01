function remove (string) {
  //coding and coding....
  
  return string[string.length - 1] === '!' ? string.split("").slice( 0 , -1).join("") : string ;
}

console.log(remove("Hi !"))
console.log(remove("Hi !!"))
console.log(remove("!Hi"))