/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const map = new Map()

    for (let i = 0; i < board.length; i++) {
        let row = board[i]
        for (let j = 0; j < row.length; j++) {
            let digit = row[j]
            let square = getSquare(i,j)
            if (digit !== ".") {
                if (map.has(digit)){
                    let digits = map.get(digit)
                    for (let d of digits) {
                        if (d[0] === i || d[1] === j || d[2] === square) {
                            return false
                        }
                    }
                    digits.push([i,j,square])
                } else {
                    map.set(digit,[[i,j,square]])
                }
            }
        }
    }

    return true
};



function getSquare(x, y) {
    let a = [0,1,2]
    let b = [3,4,5]
    let c = [6,7,8]

    if (a.includes(x) && a.includes(y)) {
        return 1
    }
    if (a.includes(x) && b.includes(y)) {
        return 2
    }
    if (a.includes(x) && c.includes(y)) {
        return 3
    }
    if (b.includes(x) && a.includes(y)) {
        return 4
    }
    if (b.includes(x) && b.includes(y)) {
        return 5
    }
    if (b.includes(x) && c.includes(y)) {
        return 6
    }
    if (c.includes(x) && a.includes(y)) {
        return 7
    }
    if (c.includes(x) && b.includes(y)) {
        return 8
    }
    if (c.includes(x) && c.includes(y)) {
        return 9
    }
}

let board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]
console.log(isValidSudoku(board))