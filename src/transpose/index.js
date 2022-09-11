const { isFunctionExpression } = require("typescript");

/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let result =[]
    
    for(let i=0;i<array[0].length;i++){
        let newArray =[]
        for(let k=0;k<array.length;k++){
            newArray.push(array[k][i])
        }
       result.push(newArray) 
    }
    return result
}


module.exports = transpose;
