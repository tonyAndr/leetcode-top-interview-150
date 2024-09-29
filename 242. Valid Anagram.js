/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // create 2 maps with repeat counts of each letter
    // compare them
    let sm = {}
    let tm = {}

    if (s.length !== t.length) {
        return false
    }
    for (let i = 0; i < s.length; i++) {
        // increment or init with 1
        sm[s[i]] = (sm[s[i]] || 0) + 1;
        tm[t[i]] = (tm[t[i]] || 0) + 1;
    }
    let keys = Object.keys(sm)
    
    for (let key of keys) {
        if (sm[key] !== tm[key]) {
            return false
        }
    }
    return true
};
let s = "rat"
let t = "car"
console.log(isAnagram(s,t))