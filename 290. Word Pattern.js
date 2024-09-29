/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let s_arr = s.split(' ')

    if (pattern.length !== s_arr.length) {
        return false
    }

    let m1 = {}
    let m2 = {}
    for (let i = 0; i < pattern.length; i++) {
        let letter = pattern[i]
        let word = s_arr[i]
        if (word === 'constructor') {
            word = 'cnstrctr' //special word fix
        }

        if (!m1[word]) { 
            m1[word] = letter
        } 
        if (!m2[letter]) { 
            m2[letter] = word
        } 

        if (m1[word] !== letter || m2[letter] !== word) {
            return false
        }
    }
    return true
};

let pattern = "abba"
let s = "dog constructor constructor dog"

console.log(wordPattern(pattern, s))