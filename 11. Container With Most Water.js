/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let li = 0
    let ri = height.length-1

    let max_area = 0
    let temp_area = 0
    let cur_min_height = 0

    while(li < ri) {
        cur_min_height = Math.min(height[li], height[ri])

        temp_area = (ri-li) * cur_min_height

        if (temp_area > max_area) {
            max_area = temp_area
        }

        if (height[li] >= height[ri]) {
            ri--
        } else {
            li++
        }
    }

    return max_area
};