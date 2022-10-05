
// Write a function called sameFrequency. Given two positive integers, 
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

//Time: O(N)

//Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false


function sameFrequency(num1, num2){
    let strNum1 = num1.toString()
    let strNum2 = num2.toString()
    if (strNum1.length !== strNum2.length){
        return false
    }
    let count1 ={}
    let count2 ={}
    for (let i in strNum1){
        count1[strNum1[i]] = (count1[strNum1[i]] || 0) +1
    }
    for (let j in strNum2){
        count2[strNum2[j]] = (count2[strNum2[j]] || 0 ) +1
    }
    for (let key in count1){
        if (count1[key] !== count2[key]) return false
    }
    return true
}



console.log(sameFrequency(182,281))