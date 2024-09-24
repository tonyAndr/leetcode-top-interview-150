/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    if (nums.indexOf(target) !== -1) {
        return 1
    }

    if (nums.length === 1 ){
        return nums[0] >= target ? 1 : 0
    }

    let li = 0;
    let ri = 0;
    let sum = nums[0];
    let min_length = 999999
    
    while (ri < nums.length) {
        if (sum < target) {
            ri++
            sum += nums[ri]
        } else {
            if (min_length > ri-li) {
                min_length = ri-li
            }
            sum -= nums[li]
            li++
        }
        if (li > ri) {break}
    }
    
    return min_length === 999999 ? 0 : min_length + 1
};