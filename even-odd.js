// method 1

function EvenOrOdd1(num){
    if(num % 2 === 0 ){
        return `number ${num} is Even` ;
    } else {
        return `number ${num} is Odd`;
    };
}

// method 2 using ternary operator 

function EvenOrOdd2(num){
    return num % 2 === 0 ? `number ${num} is Even` : `number ${num} is Odd`  ;
}


console.log(EvenOrOdd1(10));
console.log(EvenOrOdd1(7));


console.log(EvenOrOdd2(10));
console.log(EvenOrOdd2(7));