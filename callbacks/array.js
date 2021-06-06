let numbers = [1, 2, 3, 4, 5, 6]


function find(input, callback) {
    let result = []
    for (const iterator of input) {
        if (callback(iterator)) { // callback -> Process [] -> true/false
            result.push(iterator)
        }
    }
    return result
}

function findOd(value) {
    if (value % 2 == 1) {
        return true
    }
}


let reulstDiviedforTwo = find(numbers, (value) => {
    if (value % 2 == 0) {
        return true
    }
})

console.log(numbers)
let reusltOdd = find(numbers, findOd)
console.log(reusltOdd)

console.log(reulstDiviedforTwo)
