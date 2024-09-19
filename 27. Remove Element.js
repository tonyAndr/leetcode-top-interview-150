/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // nums = nums.filter((x) => x !== val)

    // return nums.length

    let count = 0
    let li = 0
    let ri = nums.length-1
    let temp;
    while (li <= ri) {

        if (nums[li] === val) {
            if (nums[ri] !== val) {
                temp = nums[li]
                nums[li] = nums[ri]
                nums[ri] = temp
                li++
                ri--
                count++
                nums.pop()
            } else {
                nums.pop()
                ri--
            }
        } else {
            li++
            count++
        }
    }

    return nums.length
};