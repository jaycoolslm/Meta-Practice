/**
 * @param {number} N
 * @param {number} M
 * @param {number[]} C
 * @return {number}
 */


function getMinCodeEntryTime(N, M, C) {
    const highestNum = N
    let seconds = 0

    C.unshift(1)

    for (let i = 0; i < M; i++) {
        const difference = Math.abs(C[i + 1] - C[i])

        if (difference < (highestNum + 1) / 2) {
            console.log(difference)
            seconds += difference
        } else {
            console.log(highestNum - difference)
            seconds += highestNum - difference
        }
    }

    return seconds
}

N = 10
M = 4
C = [9, 4, 4, 8]


console.log(getMinCodeEntryTime(N, M, C))