/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    //input: integer
    //output: array
    //for value i in a range 1 -n, if i is divisible by x return y string 
    //if not retur i as a string
    const answer= [] 
    for(let i= 1; i <= n; i++){
        if (i % 3 === 0 && i % 5 === 0){
            answer.push('FizzBuzz')
        }
        else if (i % 3 === 0){
            answer.push('Fizz')
        }
        else if (i % 5 === 0){
            answer.push('Buzz')
        }

        else {
            answer.push(i.toString())
        }
   
    }
   return answer 
    
    
    
};
    
 