
// Given an integer array nums, return true if any value appears at least twice in the array,
//  and return false if every element is distinct.

let nrs = [1, 2, 3, 4]


var containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let ii = i + 1; ii < nums.length; ii++) {
            if (nums[ii] == nums[i]) {
                return true
            }
        }
    }
    return false
};

containsDuplicate(nrs)

//Other way to find the solution

var containsDuplicate = function (nums) {
    //Here Im sorting the array from the smallest to the gratest number
    nums.sort((num1, nums) => num1 - num2)
    // then here I am comparing if it is repeating the same number.
    for (let i = 0; i < nums.length - 1; i++) {
        //nums.lenght -1 = has to be menos 1 because it has to go one number before finish the array because I am checking the next number all the time
        if (nums[i] == nums[i + 1]) {
            return true
        }
    }
    return false
}

containsDuplicate(nrs)