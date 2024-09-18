/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let buy_i = 0;
    let sell_i = 1;
    let sum = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[sell_i]) {
            if (i === prices.length-1) {
                sum = sum + (prices[i] - prices[buy_i])
            } else {
                sell_i = i
            }
        } else {
            if (prices[sell_i] > prices[buy_i]) {
                sum = sum + (prices[sell_i] - prices[buy_i])
            }
            buy_i = i
            sell_i = i
        }

        
    }

    return sum
};