/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let romanNumbers={
        M:1000,
        D:500,
        C:100,
        L:50,
        X:10,
        V:5,
        I:1
    }
    let result=0

    for(let i= 0;i< roman.length;i++){
        let presentRoman=roman[i]
        let nextRoman=roman[i +1]
        if(romanNumbers[nextRoman]> romanNumbers[presentRoman]){
            result+=romanNumbers[nextRoman]-romanNumbers[presentRoman]
            i++
        } else{
            result+=romanNumbers[presentRoman]
        }
    }
    return result
}

module.exports = romanToDecimal;
