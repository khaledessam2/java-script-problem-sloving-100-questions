function CountingSheep(arrayOfSheep){
  return arrayOfSheep.filter((sheep) => sheep === true).length ;
}


let ex = [ 
  true , true , true, false ,
  true , true , true, true ,
  true , false , true, false ,
  true , false , true, false ,
  true , true , true, true ,
  false , false , true , true
]


console.log(CountingSheep(ex)) ;