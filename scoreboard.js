/**
 * @param {number} N
 * @param {number[]} S
 * @return {number}
 */

function getMinProblemCount(N, S) {
    let hasOdd = false
    let largestEven = 0

    for (let item of S) {
        if (item % 2 === 1) {
            hasOdd = true
            largestEven = Math.max(largestEven, item - 1)
        }

        largestEven = Math.max(largestEven, item)
    }

    return Math.floor(largestEven / 2) + hasOdd
}

N = 4
S = [2, 4, 6, 8]

console.log(getMinProblemCount(N, S))
