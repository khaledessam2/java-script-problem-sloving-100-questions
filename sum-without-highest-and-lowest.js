// sum without Highest and lowest number .


// method 1 
function sumNumber1(array){
    if(!array.length) return 0 ;
    let maxValue = Math.max(...array) ;
    let minvalue = Math.min(...array) ;
    let filter = array.filter((element)=>{
        return (element !== minvalue && element !== maxValue)
    }) ;
    return filter.reduce((acc , current)=> acc + current , 0) ;
}

console.log(sumNumber1([6,2,1,8,10])) ;


// method 2 

function sumNumber2(array){
    if(!array.length) return 0 ;
    return array.filter((element)=>element !== Math.max(...array) && element !== Math.min(...array)).reduce((acc , current)=> acc + current , 0)
}

console.log(sumNumber2([6,2,1,8,10])) ;


// if the Highest and Lowest repeat more than one remove only one 
function sumNumber3(array){
    if(!array.length) return 0 ;
    return array.sort((a , b) => a - b).slice(1 , -1).reduce((acc , current)=> acc + current , 0);
}

console.log(sumNumber3([6,2,1,1,8,10,10])) ;


console.log(Math.max(...[10 , 20 ,30])) ;