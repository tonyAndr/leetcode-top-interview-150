/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let shortest_word = ''
    let shortest = 999
    for (const word of strs) {
        if (shortest > word.length) {
            shortest = word.length
            shortest_word = word
        }
    }

    let prefix = ''
    let stop = false
    for (let i = 0; i < shortest_word.length; i++) {
        let temp_prefix = prefix + shortest_word[i]

        for (let j = 0; j < strs.length; j++) {
            if (strs[j] === shortest_word) {
                continue
            }

            if (strs[j].indexOf(temp_prefix) !== 0) {
                stop = true;
                break
            }
        }

        if (stop) {
            break;
        }

        prefix = temp_prefix
    }

    return prefix
};

let strs = ["flower","flow","flight"]

console.log(longestCommonPrefix(strs))