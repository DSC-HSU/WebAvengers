function mul(a, b) {
    return a * b
}

function add(a, b) {
    return a + b
}

// chữ ký hàm arg 
function cal(a, b, callback) {
    //  callback is a func with 2 arg input
    return callback(a, b)
}
let result = cal(2, cal(2, 3, add), mul)
console.log(result)

// Demo call stack


// function calculator() {
//     let a = 10
//     let b = 20
//     let result = add(a, b)
//     console.log(result)
// }