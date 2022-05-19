/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let str = x.toString().split('').reverse().join('')
    return x.toString() === str
    console.log(str)
};


//you cant manipulate a number, so string, por isso tenho que converter.
// x by default is a number, so I need to turn it into a sring again