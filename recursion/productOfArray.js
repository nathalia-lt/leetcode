

//Write a function called productOfArray which takes in an array of numbers and returns the product of them all.


//SLICE
// .slice(start,end) -> returns the selected elements in an array as a new array
// does not change the original array (Non destructive)

//numArray = [1,2,3,4,5]
//let sliceArray = numArray.slice(1,3)




// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

return arr[0] * productOfArray(arr.slice(1));
