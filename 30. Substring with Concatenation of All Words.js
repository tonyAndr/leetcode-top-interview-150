/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let concs = []
    let indices = []
    let str = ''
    let word_len = words[0].length
    let li = 0
    let ri = word_len * words.length
    while (ri <= s.length) {
        str = s.slice(li, ri)

        for (let word of words) {
            let w_i = findIndex(str, word, 0)
            if (w_i === -1) {
                break;
            } else {
                str = str.slice(0, w_i) + str.slice(w_i+word_len)
            }

        }

        if (str.length === 0) {
            indices.push(li)
        }

        li++
        ri++

    }

    return indices
};

function findIndex(s, word, offset) {
    let w_i = s.indexOf(word, offset)
    if (w_i === -1) {
        return -1
    }

    if (w_i % word.length !== 0) {
        w_i = findIndex(s, word, w_i+1)
    }

    return w_i
}

let s = "ababaab"
let words = ["ab","ba","ba"]
console.log(findSubstring(s, words))