/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let s_idx = new Array(200).fill(0)
    let t_idx = new Array(200).fill(0)

    if (s.length !== t.length) {
        return false
    }

    for (let i = 0; i < s.length; i++) {
        let scode = s.charCodeAt(i)
        let tcode = t.charCodeAt(i)
        if (s_idx[scode] !== t_idx[tcode]){
            return false
        }

        s_idx[scode] = i+1
        t_idx[tcode] = i+1
    }
    return true
};

let s = "foo"
let t = "bar"

console.log(isIsomorphic(s,t))