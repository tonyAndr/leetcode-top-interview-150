/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let temp = []
    let to_return = []
    for (let i = 0; i < nums.length; i++) {
        temp = nums.slice()
        temp.splice(i, 1)
        to_return[i] = temp.reduce((a, b) => a * b)
    }
    return to_return
};