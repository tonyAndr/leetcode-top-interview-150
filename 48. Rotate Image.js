/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length
    let count = n*n

    let i = 0 
    let temp;
    while (count > 0) {

        if (count === 1) {
            count--
            continue
        }

        for (let k = i; k < n - i - 1; k++) {
            let y = i
            let x = k
            let cell = matrix[y][x]
            let new_coords;
            do {
                new_coords = new_place(y, x, n)
                temp = matrix[new_coords[0]][new_coords[1]]
                matrix[new_coords[0]][new_coords[1]] = cell
                cell = temp
                y = new_coords[0]
                x = new_coords[1]
                count--
            } while(new_coords[0] !== i || new_coords[1] !== k);
            // j++
        }
        i++
    }
    return matrix
};

function new_place(i,j,n) {
    return [j, n-1-i]
}

let matrix = [[1,2,3],[4,5,6],[7,8,9]]

console.log(rotate(matrix))