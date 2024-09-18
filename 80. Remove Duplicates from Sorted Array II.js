/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let num_repeats = 0

    for (let i = 1; i < nums.length; i++) {

        if (nums[i-1] === nums[i]) {
            num_repeats++;

            if (num_repeats >= 2) {
                nums.splice(i, 1)
                i--;
            }
        } else {
            num_repeats = 0;
        }
    }

    return nums.length
};