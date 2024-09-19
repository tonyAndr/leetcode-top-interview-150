/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let cur_length = 0;
    let output = []
    let cur_words = []
    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        let min_spaces_count = cur_words.length
        if (cur_length + word.length + min_spaces_count <= maxWidth) {
            cur_length += word.length
            cur_words.push(word)
        } else {
            let line = ''
            let spaces_needed = maxWidth - cur_words.join('').length
            let slots = cur_words.length > 1 ? cur_words.length - 1 : 1
            let base_num_of_spaces = Math.floor(spaces_needed / slots)
            let div_rest = spaces_needed % slots

            for (let j = 0; j < slots; j++) {
                line += cur_words[j];
                if (div_rest > 0) {
                    line += ' '.repeat(base_num_of_spaces + 1)
                    div_rest--
                } else {
                    line += ' '.repeat(base_num_of_spaces)
                }

                if (j === slots - 1 && cur_words.length > 1) {
                    line += cur_words[j+1]
                }
            }

            output.push(line)

            cur_length = word.length
            cur_words = [word]
        }

        if (i === words.length-1) {
            let line = ''
            line = cur_words.join(' ')
            line += ' '.repeat(maxWidth-line.length)
            output.push(line)
            break;
        }
        
    }

    return output
};

let words = ["ask","not","what","your","country","can","do","for","you","ask","what","you","can","do","for","your","country"]
console.log(fullJustify(words, 16))