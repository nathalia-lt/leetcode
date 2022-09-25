// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

let integerArr = [1,2,3,4,5,6]
let intSum = 10

//I would pick the first one and then I would go to the remain of the array and try to 
//find a num that fills the sum.

//I am searching twice, that means I need two for loops. 1 to pick a number and the other to 
//pick the next number to add up to my target

var twoSum = function(nums, target) {
    for (let i=0; i < nums.length ; i++){
        for (let ii=i+1; ii < nums.length; ii++){
            //let ii = i+1 = is the next position after the i is
            if (nums[i] + nums[ii] == target){
                return [i,ii]
            }
        }    
    }
    return []
    
};

 