function mul(a, b) {
    return a * b
}

function add(a, b) {
    return a + b
}


function cal(a, b, method) {
    return method(a, b)
}

console.log(cal(2, cal(2, 3, add), mul))

// Demo call stack


function calculator() {
    let a = 10
    let b = 20
    let result = add(a, b)
    console.log(result)
}