
// Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, 
// such as cinema, formed from iceman.

Examples:

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

//time complexity: o(n) = linear

//Note: You may assume the string contains only lowercase alphabets.

//Has to be the same chacters and the same number as well
//my input is two strings
//my output is an anagram.

function validAnagram(first, second){
    //here I check if they have the same length
    if (first.length !== second.length){
        return false
    }
    //I am going to make a counter holder, to count how many chacacters each string has.
    const lookup = {}
  
    //I am going to do a for loop, for each string, to count how many values each index has.
    for (let i in first){
        let letter = first[i]
        //We are going to check if there is a key called i(any index) inside first( we are going to put new keys values pairs inside first)
        //if the key exists inside of first already, then we need to increase the value by1 
        //if the key does not exist inside of first, we need to create a new key:value pair (we havent seen this letter before)
        lookup[letter] ? lookup[letter]+=1 : lookup[letter]=1
    }
    for (let i in second){
        let letter = second[i]
        // cant find letter or letter is zero then it is not an anagram
        lookup[letter] ? lookup[letter]+=1 : lookup[letter]=1
        if (!lookup[letter]){
            return false
        }else{
            lookup[letter] -=1
        }
}
return true
}

console.log(validAnagram('anagram', 'nagaram'))