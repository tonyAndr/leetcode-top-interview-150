/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let len = gas.length
    let tank = 0
    let pos_start = -1
    let circle_found = false
    let idx = 0
    let i = 0
    while (!circle_found) {
        tank = tank + gas[idx] - cost[idx]
        if (tank >= 0) {
            if (pos_start === -1) {
                pos_start = idx
            }

            if (pos_start === ind(len, idx + 1)) {
                circle_found = true
            }
        } else {
            pos_start = -1
            tank = 0
            if (i >= len) {
                circle_found = true
            }
        }


        if (idx === len - 1 && pos_start === -1) {
            // not found
            circle_found = true
        }

        idx = ind(len, idx + 1)
        i++
    }
    return pos_start
};

function ind(len, i) {
    if (i < len) {
        return i
    } else {
        return i % len
    }
}