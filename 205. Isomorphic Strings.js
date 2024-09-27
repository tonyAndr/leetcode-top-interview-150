// NOT FINISHED

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
            s_map.set(s[i], s_map.get(s[i]).push(i))
        } else {
            s_map.set(s[i], [i])
        }
        if (t_map.has(t[i])) {
            t_map.set(t[i], t_map.get(t[i]).push(i))
        } else {
            t_map.set(t[i], [i])
        }
    }

    let s_map_string = ''
    for (const [key, value] of s_map) {
        s_map_string = value.join('')
    }
    let t_map_string = ''
    for (const [key, value] of t_map) {
        t_map_string = value.join('')
    }

    return s_map_string === t_map_string
};

let s = "paper", t = "title"

console.log(isIsomorphic(s,t))