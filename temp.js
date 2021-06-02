function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function 🔥');
}

// passing function as an argument
greet('John', callMe);



function printMe() {
    console.log("DSC 😁")
}
setTimeout(printMe, 3000)
// Print out DSC after 3s of delay




