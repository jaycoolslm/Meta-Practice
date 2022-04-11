/**
 * @param {number} N
 * @param {number[]} R
 * @return {number}
 */
function getMinimumDeflatedDiscCount(N, R) {
    for (let i = 0; i < N - 1; i++) {
        const initial = R[i]
        const next = R[i + 1]
        let nextVar = next

        let amountReduced = 0

        if (initial < next) continue

        while (initial >= nextVar) {
            nextVar--
            if (nextVar === 0) {
                return -1
            } else {
                amountReduced++
            }
        }
    }

    return amountReduced
}


N = 5
R = [2, 5, 3, 6, 5]
console.log(getMinimumDeflatedDiscCount(N, R))