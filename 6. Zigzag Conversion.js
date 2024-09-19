/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let lines = new Array(numRows).fill('')
    let line = 0
    let direction = 'down'
    for (let i = 0; i < s.length; i++) {
        lines[line] += s[i]
        if (numRows > 1) {

            if (line > 0 && (line === numRows - 1 || direction === 'up')) {
                line--
                direction = 'up'
                continue
            }
            if (line === 0 || direction === 'down') {
                line++
                direction = 'down'
            }
        } 
    }

    return lines.join('')
};
let s = "PAYPALISHIRING"

console.log(convert(s, 3))