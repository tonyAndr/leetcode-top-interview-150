/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let regex = /\s+/ig
    let words = s.trim().replace(regex, ' ').split(' ');

    // s = ''
    // for (let i = words.length - 1; i >= 0; i--) {
    //     s += words[i] + ''
    // }
    // return s.trim()

    

    return words.reverse().join(' ')
};