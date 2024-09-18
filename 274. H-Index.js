/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let counter;
    for (let i = citations.length; i >= 1; i--) {

        counter = 0;
        for (let j = citations.length - 1; j >= 0; j--) {
            if (citations[j] - i >= 0) {
                counter++
            }

            if (counter >= i) {
                return i
            }
        } 
    }

    return 0
};