/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let count = 0
    let candidate = 999;

    for (let i = nums.length - 1; i >=0; i--) {
        if (count === 0) {
            candidate = nums[i]
        }

        if (candidate === nums[i]) {
            count++
        } else {
            count--
        }
    }


    return candidate
};