const s = new Date().getSeconds();

setTimeout(function () {
    console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 0)

while (true) {
    if (new Date().getSeconds() - s >= 2) {
        console.log("Good, looped for 2 seconds")
        break;
    }
}

    // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
