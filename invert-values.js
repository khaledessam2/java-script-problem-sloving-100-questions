function InvertValues(array){ 
  return array.map((element) => element * -1) ;
}

console.log(InvertValues([1,2,3,4,5]))
console.log(InvertValues([1,-2,3,-4,5]))