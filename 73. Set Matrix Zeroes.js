// NOT FINISHED

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // traverse and find all 0's coords
    // set 1,2 => 0,2 1,0 to flag -7888888 
    // on second go change all flagged to 0s

    let m = matrix.length
    let n = matrix[0].length

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = -7888888
                matrix[0][j] = -7888888
            }
        }
    }
    for (let j = 1; j < n; j++) {
        if (matrix[0][j] === -7888888) {
            for (let i = 0; i < m; i++) {
                matrix[i][j] = 0
            }
        }
    }

    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === -7888888) {
            for (let j = 0; j < n; j++) {
                if (i === 0 && j === 0) {
                    continue
                }
                matrix[i][j] = 0
            }
        }
    }

    if (matrix[0][0] === -7888888) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0
        }
    }
    return matrix
};

let matrix = [
    [1,2,3,4],
    [5,0,7,8],
    [0,10,11,12],
    [13,14,15,0]
]
console.log(setZeroes(matrix))