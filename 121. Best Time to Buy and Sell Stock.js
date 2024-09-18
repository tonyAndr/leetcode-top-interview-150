/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    // return max(prices[si]-prices[bi]) where bi < si  

    if (prices.length <= 1) {
        return 0
    }

    // let min = Math.min(prices)  
    // let max = Math.max(prices)  
    // let min_i, max_i

    // min_i = prices.indexOf(min)
    // max_i = prices.lastIndexOf(max)
 
    // if (max_i > min_i) {
    //     return max-min
    // }

    let local_max = 0;
    let local_diff = 0;
    let temp_local_diff = 0;

    for (let i = prices.length - 1; i >= 0; i--) {
        if (prices[i] > local_max) {
            local_max = prices[i]
        }

        if (prices[i] < local_max) {
            temp_local_diff = local_max - prices[i]

            if (temp_local_diff > local_diff) {
                local_diff = temp_local_diff;
            }
        }
    }


    return local_diff


//       let left = 0; // Buy
//   let right = 1; // sell
//   let max_profit = 0;
//   while (right < prices.length) {
//     if (prices[left] < prices[right]) {
//       let profit = prices[right] - prices[left]; // our current profit

//       max_profit = Math.max(max_profit, profit);
//     } else {
//       left = right;
//     }
//     right++;
//   }
//   return max_profit;
};