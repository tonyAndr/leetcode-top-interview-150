/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    nums = nums.filter((x) => x !== val)

    return nums.length
};