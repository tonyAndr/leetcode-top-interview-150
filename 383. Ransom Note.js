/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false
    }

    let map = new Map()

    for (let i = 0; i < ransomNote.length; i++) {
        if (map.has(ransomNote[i])) {
            map.set(ransomNote[i], map.get(ransomNote[i]) + 1)
        } else {
            map.set(ransomNote[i], 1)
        }
    }

    for (let i = 0 ; i < magazine.length; i++) {
        if (map.has(magazine[i])) {
            map.set(magazine[i], map.get(magazine[i]) - 1)
        } 
    }
    let can = true
    for (let letter of map.keys()) {
        if (map.get(letter) > 0) {
            can = false
            return can
        }
    }
    return can
};

let ransomNote = "a"
let magazine = "b"

console.log(canConstruct(ransomNote, magazine))