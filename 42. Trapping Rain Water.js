/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // remember cur height + idx
    // go forward until i find same or > height
    // if found => fill everything up until the lowest of 2 points
        // continue from cur index same algo
    // if not found, get next height and repeat  
    let highest = height[0]
    let h_i = 0
    let water = 0
    for (let i = 1; i < height.length; i++) {
        if (height[i] >= highest) {
            if (i - h_i > 1) {
                let min = Math.min(highest, height[i])
                for (let j = h_i+1; j < i; j++) {
                    water += min-height[j]
                    height[j] = min
                }
            }
            highest = height[i]
            h_i = i
        } 
    }

    return water
};

let arr = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(arr))