/**
 * @param {number} N
 * @param {number[]} D
 * @param {number} K
 * @return {number}
 */
function getMaximumEatenDishCount(N, D, K) {
    let lastKDishes = new Array(K)
    let dishesEaten = 0

    for (let item of D) {
        if (lastKDishes.indexOf(item) === -1) {
            lastKDishes.pop()
            lastKDishes.unshift(item)
            dishesEaten++
        } else continue
    }

    return dishesEaten
}

let lastKDishes = new Array(5)

console.log(lastKDishes.length + 'initial')

lastKDishes.push('last')
console.log(lastKDishes.length + ' after push')