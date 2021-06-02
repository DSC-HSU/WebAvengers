let entryTime = (new Date).getTime()
function getElapsedTime() {
    let now = (new Date).getTime()
    return now - entryTime
}
function heavyTask() {
    let result = 0
    for (let index = 0; index < 300000000; index++) {
        result += index
    }
    return result
}

function runAsynchronously(task, resultCallback) {
    setTimeout(() => {
        resultCallback(task())
    }, 0)
}


runAsynchronously(heavyTask,
    (value) =>
        console.log("Task result: ", value, "Time : ", getElapsedTime()))


console.log("Hello World", "Time : ", getElapsedTime())
