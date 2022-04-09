/**
 * @param {number} N
 * @param {number} K
 * @param {number} M
 * @param {number[]} S
 * @return {number}
 */

function getMaxAdditionalDinersCount(N, K, M, S) {
    if (N < 1 || N > 10 ** 15 || K < 1 || K > N || M < 1 || M > 500000 || M > N) {
        throw new Error('Values outside of predetermined ranges')
    }

    // Sort S in ascending order
    S.sort((a, b) => {
        return a - b
    })

    const A = K + 1

    let extraPeople = []

    for (let i = 0; i < S.length; i++) {
        const first = S[i]
        let firstVary = first
        let second = S[i + 1]

        let last = N

        if (i === 0) {
            while (firstVary - A > 0) {
                firstVary -= A
                extraPeople.push(firstVary)
            }

            // handle spaces after
            while (second - first >= 2 * A) {
                second = second - A
                extraPeople.push(second)
            }
        }

        if (i === S.length - 1) {
            // only needs to handle spaces after
            while (last - first >= A) {
                extraPeople.push(last)
                last -= A
            }
        }

        if (0 < i < S.length - 1) {
            while (second - first >= 2 * A) {
                second = second - A
                extraPeople.push(second)
            }
        }
    }

    console.log(extraPeople)
    return extraPeople.length

}


N = 15
K = 2
M = 3
S = [11, 6, 14]

console.log(getMaxAdditionalDinersCount(N, K, M, S))