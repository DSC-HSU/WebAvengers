function getRandom() {
    return Math.floor(Math.random() * 100);
}


localStorage.setItem("data", getRandom().toString())

let item = {
    title: getRandom(),
    arr: [
        {
            name: "Duy"
        }
    ]
}

// JSON.stringify(item)
// console.log(item)
// console.log("--------")
let jsonString = JSON.stringify(item);
// console.log(jsonString)
// console.log(JSON.parse(jsonString))

sessionStorage.setItem("items", jsonString)
let oldItems = JSON.parse(sessionStorage.getItem("items"))
console.log(oldItems)

oldItems.title = "Car"
console.log(oldItems)

localStorage.setItem("items", sessionStorage.stringify(oldItems))


// localStorage.setItem("items", [item, item])
// console.log(localStorage.getItem("items"))
// console.log(typeof localStorage.getItem("items"))