let numbers = [1, 2, 3, 4, 5, 6]

function findOne(input, callback) {
    for (const iterator of input) {
        if (callback(iterator)) {
            return iterator
        }
    }
}

function find(input, callback) {
    let result = []
    for (const iterator of input) {
        if (callback(iterator)) {
            result.push(iterator)
        }
    }
    return result
}

let result = findOne(numbers, (value) => {
    if (value == 2) {
        return true
    }
})

let resultFindAll = find(numbers, (value) => {
    if (value % 2 == 0) {
        return true
    }
})
console.log(result)
console.log(resultFindAll)