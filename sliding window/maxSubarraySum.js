
// This pattern involves creating a window which can either be an array or number from one position to another.
// Depending on a certain condition, the window either increases or closes (and a new window is created)
// - very useful for keeping track of subset of data in an array/string etc.

//EXERCISE

// Given an array of integers and a number, write a function called maxSubarraySum, 
// which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. 
// In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null


// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)

function maxSubarraySum(arr, num){
    if (arr.length < num) return null

    let total = 0 
    for (let i=0; i < num; i++){
        
        total += arr[i]
    }
    let currentTotal = total
    for (let i=num; i < arr.length; i++){
        currentTotal += arr[i] - arr[i-num]
        total = Math.max(total, currentTotal)
    }
    return total
}

console.log(maxSubarraySum([100,200,300,400], 2))