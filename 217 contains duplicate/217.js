
// Given an integer array nums, return true if any value appears at least twice in the array,
//  and return false if every element is distinct.

let nrs = [1,2,3,4]


var containsDuplicate = function(nums) {
    for ( let i=0; i < nums.length; i++){    
        for (let ii= i+1; ii < nums.length; ii++){
           if (nums[ii] == nums[i]) {
               return true
           }
        }      
    }
    return false
};

containsDuplicate(nrs)