
// Write a recursive function called flatten which accepts an array of arrays
// and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

//Array.isArray() static method determines whether the passed value is an Array.

//CONCAT 
// array1.concat(array2,..., arrayX) -> joins (concatenates) two or more arrays together 
// does not udpate the existing arrays but returns a new one 
//Diferente de Join, concat can colocar junto diferentes arrays

//SLICE
// .slice(start,end) -> returns the selected elements in an array as a new array
// does not change the original array (Non destructive)


function flatten(oldArr) {
  let newArr = []
  //faco um for loop
  for (let i of oldArr) {
    if (Array.isArray(oldArr[i])){
      newArr = newArr.concat(flatten(oldArr[i]))
    } else {
      newArr.push(oldArr[i])
    }
  }
  return newArr
}

//why does it returns undefined??
console.log(flatten([1, [2, [3, 4], [[5]]]]))

