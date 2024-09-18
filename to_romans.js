/**
 * @param {string} s
 * @return {number}
 */
var intToRoman = function(num) {
    let s = ''
    let div = 0

    div = Math.floor(num/1000) 
    s += 'M'.repeat(div)
    num = num - div*1000

    div = Math.floor(num/100) 
    switch(div) {
        case 9:
            s += 'CM'
            break
        case 4: 
            s += 'DC'
            break
        case 1:
        case 2:
        case 3:
            s += 'C'.repeat(div)
            break;
        case 5:
        case 6:
        case 7:
        case 8:
            s += 'D' + 'C'.repeat(div-5)
            break;
    }
    num = num - div*100

    div = Math.floor(num/10) 
    switch(div) {
        case 9:
            s += 'XC'
            break
        case 4: 
            s += 'XL'
            break
        case 1:
        case 2:
        case 3:
            s += 'X'.repeat(div)
            break;
        case 5:
        case 6:
        case 7:
        case 8:
            s += 'L' + 'X'.repeat(div-5)
            break;
    }
    num = num - div*10

    div = Math.floor(num/1) 
    switch(div) {
        case 9:
            s += 'IX'
            break
        case 4: 
            s += 'IV'
            break
        case 1:
        case 2:
        case 3:
            s += 'I'.repeat(div)
            break;
        case 5:
        case 6:
        case 7:
        case 8:
            s += 'V' + 'I'.repeat(div-5)
            break;
    }

    return s
};

let num = 1994
console.log(intToRoman(num))