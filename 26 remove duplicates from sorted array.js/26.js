// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var removeDuplicates = function(nums) {    
//     let newArr =[ ]
//      for (let i = 0; i < nums.length; i++){ // i++ = i+=1 = i = i + 1
//         let val = nums[i]//returns the value of the index in the array // -> i = 1, nums[1] = 1
//         let res = nums.indexOf(val) // -> nums.indexOf(1)
//         // if the result of nums.indexOf(val) returns an index that is different than the index we used to create val, then that means val is a duplicate in nums
//          console.log('index: ', i, ' value: ', nums[i], ' indexOf(',nums[i],'): ', res)
//          console.log()
//          if (i === res){ // non duplicate numbers will always have an index that matches 
//      // the index of the first element that has the same value 
//      // duplicate numbers have indices that do not match the first index of their value in the array
//              newArr.push(val)
//          }
//      }
//     console.log(newArr)
// };

//outro jeito de fazer e mais simplificado, abaixo:

var removeDuplicates = function(nums) {    
  for (let i = 1; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) != i) {
        // if value at i is in the sorted array
        // remove the value at the current index
      nums.splice(i, 1);
      //decrease the counter to account the change in the array's size
      i--;
    }
  }

  return nums.length;
};

// FIND INDEX
// .findIndex -> finds the index of the first element of an array that completes a test 

// let findIndexArray = wordArray.findIndex(word=>word.length>5)
// console.log('FIND INDEX: ', findIndexArray)






//They want me to return an array of numbers that dont repeat the same numbers.
//Id go throgh the array, pick the first number and check if its repeting and do the 
//same in the whole array.