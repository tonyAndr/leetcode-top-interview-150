/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let last_idx = nums.length - 1
    let cur_pos = last_idx - 1;

    if (last_idx === 0) {
        return true
    }

    while (cur_pos >= 0) {
        if (last_idx - cur_pos <= nums[cur_pos]) {
            last_idx = cur_pos;
        }
        cur_pos--;
    }

    return last_idx === 0;
};