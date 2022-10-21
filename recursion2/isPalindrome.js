


// Write a recursive function called isPalindrome which returns true if the string passed to it is 
// a palindrome (reads the same forward and backward). 
// Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

//remember that strings are immutable so you will need to use methods like
//slice, substr, or substring to make copies of strings

//SLICE
// .slice(start,end) -> returns the selected elements in an array as a new array
// does not change the original array (Non destructive)


//how can I define the parameter in this case?

function isPalindrome(str){
    if(str.length === 1) return true;
    console.log(str.length)
    if(str.length === 2) return str[0] === str[1];
    //console.log( str[0] === str[1])
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

console.log(isPalindrome('tacocat'))