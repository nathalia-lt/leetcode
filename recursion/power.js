
// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent. 
// This function should mimic the functionality of Math.pow()  
// - do not worry about negative bases and exponents.


// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// POWER
// Math.pow(num1,num2) -> returns num1 to the power of num2



function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}

2 * power(2,4-1)
2 * (2*2*2)
2 * 8
16

console.log(power(2,4))

// function power(base, exp){
//     let result = 1;
//     for (i = 0; i < exp; i++) {
//     result = result * base
//     }
//     return result;
// } 

