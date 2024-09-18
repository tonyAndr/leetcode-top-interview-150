/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let len = nums.length;
    let last_idx = len-1;
    if (len <= 1) {
        return 0
    }

    let jumps = 0

    return recur(nums, jumps, last_idx)
};

var recur = function (nums, jumps, last_idx) {
    let cur_pos = last_idx - 1
    let possible_idx = last_idx
    while (cur_pos >= 0) {
        if (last_idx-cur_pos-nums[cur_pos] <= 0) {
            possible_idx = cur_pos
        }
        cur_pos--
    }
    jumps++;
    if (possible_idx === 0) {
        return jumps;
    } else {
        return recur(nums, jumps, possible_idx)
    }
}