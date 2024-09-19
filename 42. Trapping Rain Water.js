/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let li = 0
    let lmax = height[li] 
    let ri = height.length-1
    let rmax = height[ri] 
    let min = 0
    let water = 0

    while (li < ri) {
        if (lmax >= rmax) {
            ri--
            if (height[ri] >= rmax) {
                rmax = height[ri]
            } 
            min = Math.min(lmax, rmax)
            if (height[ri] < min) {
                water += min - height[ri]
            }
        } else {
            li++
            if (height[li] >= lmax) {
                lmax = height[li]
            }
            min = Math.min(lmax, rmax)
            if (height[li] < min) {
                water += min - height[li]
            }
        }


    }
    return water
};

let arr = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(arr))