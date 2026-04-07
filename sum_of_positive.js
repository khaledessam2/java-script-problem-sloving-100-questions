/* you got an array of number , return the sum of all positive number 
Example [1 , -4 , 7 , 12]  => 1 + 7 + 12 = 20
note : if there is nothing to sum , the sum is default 0 ;
*/

// method 1 
function PositiveSum1(array){
    let sum = 0 ;
    for(let i = 0 ; i < array.length ; i++){
        if(array[i] > 0){
            sum += array[i] ;
        }
    }
    return sum ;
}

console.log(PositiveSum1([1 , -4 , 7 , 12])) ;

// method 2 using filter and redudce ;

function PositiveSum2(array){
    return array.filter((element)=> element > 0 )
    .reduce((perv_value , current_value) => perv_value + current_value + 0) ;
}

console.log(PositiveSum2([1 , -4 , 7 , 12])) ;