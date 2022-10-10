
// Write a function called findLongestSubstring, 
// which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6


//Time Complexity - O(n)

// MAX 
// Math.max(num1,num2) -> returns the largest number between two numbers


// let maxNum = Math.max(0,100)
// //dentro do parenteses eu sempre tenho que colocar dois 'valores', asssim math.max vai ter com o que comparar
// console.log('Max: ', maxNum)

function findLongestSubstring(str){
    let longest = 0
    let seen = {}
    let start = 0
    for (let i=0; i < str.length; i ++){
        let char = str[i]
        if (seen[char]){
            start = Math.max(start, seen[char])
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1)
        seen[char] = i + 1
    }
    return longest
}

console.log(findLongestSubstring('rithmschool'))