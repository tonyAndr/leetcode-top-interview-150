/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let y_len = matrix.length // vert
    let x_len = matrix[0].length //horiz
    let output = []

    let x = 0, y = 0
    let direction = '+'
    let axis = 'x'
    let count = x_len*y_len
    while(count !== 0) {
        let digit = matrix[y][x]
        output.push(digit)
        matrix[y][x] = '.'
        count--

        if (axis === 'x') {
            if (direction === '+') {
                if (x >= x_len-1 || matrix[y][x+1] === '.') {
                    axis = 'y'
                    y++
                } else {
                    x++
                }
            } else {
                if (x <= 0 || matrix[y][x-1] === '.') {
                    axis = 'y'
                    y--
                } else {
                    x--
                }
            }
        } else {
            if (direction === '+') {
                if (y >= y_len-1 || matrix[y+1][x] === '.') {
                    axis = 'x'
                    direction = '-'
                    x--
                } else {
                    y++
                }
            } else {
                if (y <= 0 || matrix[y-1][x] === '.') {
                    axis = 'x'
                    direction = '+'
                    x++
                } else {
                    y--
                }
            }
        }
    }

    return output
};



let matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]

console.log(spiralOrder(matrix))