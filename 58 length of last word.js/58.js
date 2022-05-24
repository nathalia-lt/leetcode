/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let arr = s.trim().split(' ').slice(-1).join(' ')
    return arr.length
    //console.log(arr)
    
};


//outra maneira de solucionar o problema
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    // return s.trim().split(' ').pop().length -> destructive
    let arr = s.trim().split(' ')
    return arr[arr.length-1].length

};



// turn a string into an array
// im going to pick the last word in that array
// Im going to count how many letters in the word and return it

//linha 6: eu nao coloco ponto depois do ('') porque eu nao to calling a method
//Im just accessing the  value in the index.
//trim you can use in string only, not an array. Por isso colocar .trim antes de tornar it 
//em array

