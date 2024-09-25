/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let li = 0
    let ri = 0

    let subst = ''

    let max_length = 0

    while (ri <= s.length) {
        if (subst.indexOf(s[ri]) !== -1) {
            li++
        } else {
            ri++    
        }
        subst = s.slice(li, ri)
        if (subst.length > max_length) {
            max_length = subst.length
        }
        if (li > ri) {
            break;
        }

    }

    return max_length
};

console.log(lengthOfLongestSubstring("pwwkew"))