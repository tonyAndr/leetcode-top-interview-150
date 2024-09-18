/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    
    let idx;

    if (nums.length <= 1 || k === nums.length) {
        return
    }

    if (k > nums.length) {
        k = k % nums.length
    }

    let new_arr = Array.from(nums)
    
    for (let i = 0; i < nums.length; i++) {
        idx = i + nums.length - k

        if (idx > nums.length - 1) {
            idx = idx - nums.length
        }
        nums[i] = new_arr[idx]
    }

};