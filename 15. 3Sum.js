//NOT SOLVED

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let triplets = []
    nums = nums.sort((a,b) => a-b)
    for (let i = 0; i< nums.length; i++) {
        // if (i+2 > nums.length-1) {
        //     break;
        // }
        let j = i+1
        let k = nums.length - 1
        let sum = 0
        while(j < k) {
            sum = nums[i] + nums[j] + nums[k]

            if (sum === 0) {
                triplets[''+nums[i]+nums[j]+nums[k]] = [nums[i],nums[j],nums[k]]
            }
            if (Math.abs(nums[i]+nums[j]) > Math.abs(nums[i]+nums[k])) {
                j++
            } else {
                k--
            }

        }

    }

    let output = []
    for (const index in triplets) {
        output.push(triplets[index])
    }
    
    return output
};

let nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))