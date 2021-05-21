
let videoContainer = document.querySelector("#videoContainer");
let button = document.querySelector("#captureButton");
console.log(videoContainer)

button.addEventListener("click", (e) => {

})


// Wowow Callbackssss
// navigator.getUserMedia is function to assess camera 
// it has callback when sussesful and errror
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
