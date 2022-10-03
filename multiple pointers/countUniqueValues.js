
//MULTIPLE POINTERS

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
// There can be negative numbers in the array, but it will always be sorted.




// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4


//Time Complexity - O(n) = linear

//Space Complexity - O(n) = linear
function unique(numbers) {
    let counter = 0
    for (let i = 0; i < numbers.length - 1; i++) {
        //here goes menos 1 bc I am not counting the last number in the array
        if (numbers[i] !== numbers[i + 1]) {
            counter = counter + 1
        }
    }
    if (numbers.length > 0) {
        counter = counter + 1
    }
    return counter
}

console.log(unique([]))


function uniqueValues(numbers){
    counter = 0
    for (i=0; i < numbers.length - 1; i++){
        if (numbers[i] !== numbers[i + 1]){
            counter = counter + 1
        }
    }
    if (numbers.length > 0){
        counter = counter + 1
    }
    return counter
}

console.log(uniqueValues([1,2,3,9,9]))


//only works with sorted array
// function countUniqueValues(arr){
//     if (arr.length === 0) return 0
//     let i = 0
//     //then we are going to start our fof loop in the sec index and check the whole array
//     for (let j= 1; j < arr.length; i++ ){
//         //here we are going to compare both index
//         if( arr[i] !== arr[j]){
//             //if they are not equal we are going to move j ahead of the array till it finds an equal
//             i++ //if they are not equals we also move i
//             arr[i] = arr[j]
//         }
//         //console.log(i,j)
//     }
//     return i +1
// }

// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])