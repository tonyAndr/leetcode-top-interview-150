/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let s_map = new Map()
    let t_map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (s_map.has(s[i])) {
            let arr = s_map.get(s[i])
            arr.push(i)
            s_map.set(s[i], arr)
        } else {
            s_map.set(s[i], [i])
        }
        if (t_map.has(t[i])) {
            let arr = t_map.get(t[i])
            arr.push(i)
            t_map.set(t[i], arr)
        } else {
            t_map.set(t[i], [i])
        }
    }

    let s_keys = Array.from(s_map.keys())
    let t_keys = Array.from(t_map.keys())
    if (s_keys.length !== t_keys.length) {
        return false
    }

    for (let i = 0; i < s_keys.length; i++) {
        let s_char = s_map.get(s_keys[i])
        let t_char = t_map.get(t_keys[i])
        if (s_char.toString() !== t_char.toString()) {
            return false
        }
    }
    return true
};

let s = "foo"
let t = "arr"

console.log(isIsomorphic(s,t))