//  method 1
function repeatString1(number , str){
    let newString ='' ;
    for(let i = 0 ;  i < number ; i++){
        newString += str ;
    }
    return newString ;
}

console.log(repeatString1(5 , " khaled ")) ;


// method 2
function repeatString2(number , str){
    return str.repeat(number) ;
}

console.log(repeatString2(2 , " shahd ")) ;