/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let regex = /[^a-z0-9]/ig
    let clean = s.trim().toLowerCase().replaceAll(regex, '')
    if (clean.length <= 1) {
        return true
    }
    let reversed = ''
    for (let i = clean.length - 1; i >= 0; i--) {
        reversed += clean[i]
    }
    
    return clean === reversed
};

let s = "0P"

console.log(isPalindrome(s))