function foo(b) {
    let a = 10
    return a + b + 11
}

function bar(x) {
    let y = 3
    return foo(x * y)
}

console.log(bar(7))


