/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let li = 1
    let ri = numbers.length
    let sum;

    if (numbers.length === 2) {
        return [li,ri]
    }

    while (li < ri) {
        sum = numbers[li-1] + numbers[ri-1]

        if (sum > target) {
            ri--
        }

        if (sum < target) {
            li++
        }

        if (sum === target) {
            break
        }
    }

    return [li,ri]

};