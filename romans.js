/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0
    let map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    for (let i = 0; i< s.length; i++) {
        switch (s[i]) {
            case 'I':
            case 'X':
            case 'C':
                if (i < s.length-1 && map[s[i+1]] > map[s[i]]) {
                    sum += map[s[i+1]] - map[s[i]]
                    i++
                } else {
                    sum += map[s[i]]
                }
                break;
            default:
                sum += map[s[i]]
                break;
        }
    }
    return sum
};

let s = "XVIII"
console.log(romanToInt(s))