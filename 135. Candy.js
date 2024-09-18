/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let len = ratings.length
    let candies_arr = []
    let to_add = 0;
    let des_idx = 0;
    for (let i = 0; i < len; i++) {

        if (i > 0 && i < len - 1) {
            if (ratings[i] > ratings[i-1] ) {
                to_add = candies_arr[i-1] + 1;
            } else if (ratings[i] > ratings[i+1]) {
                to_add = 2
            } else {
                to_add = 1
            }
        }
        if (i === len - 1) {
            if (ratings[i] > ratings[i-1]) {
                to_add = candies_arr[i-1] + 1
            } else {
                to_add = 1
            }
        }
        if (i === 0) {
            if (ratings[i] > ratings[i+1]) {
                to_add = 2
            } else {
                to_add = 1
            }
        }      
        candies_arr[i] = to_add
        update_prev(i, candies_arr, ratings)        


    }
    return candies_arr.reduce((a, b) => a + b)
};

function update_prev(i, candies_arr, ratings) {
    if (i > 0) {
        if (ratings[i-1] > ratings[i] && candies_arr[i-1] <= candies_arr[i]) {
            candies_arr[i-1]++
            update_prev(i-1, candies_arr, ratings)
        }
    }
    return
}