/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var truncateSentence = function(s, k) {
    let arr = s.split(' ').splice(0,k).join(' ')
    console.log(arr)
    return arr
};
    
    // SPLICE
// .splice(index,length) -> removes length of elements in the array starting at the specified index
// changes the original array (its a destructive method)
// returns an array of the removed items

let numArray = [1,2,3,4,5]
let spliceArray = numArray.splice(1,3)
console.log('SPLICE: ', numArray, spliceArray)
    
//I would find the numbers of words that I need and from there would cut the rest that 
    //I dont need. 