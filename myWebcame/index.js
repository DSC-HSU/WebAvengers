
let videoContainer = document.querySelector("#videoContainer");
let button = document.querySelector("#captureButton");
console.log(videoContainer)

button.addEventListener("click", (e) => {

})


// Wowow Callbackssss
function intiCamera() {
    navigator.getUserMedia({
        video: true
    }, (stream) => {
        videoContainer.srcObject = stream;
    }, (err) => {
        console.log(err)
    })
}

intiCamera();
