// This file hole the temp demo practice submission by participants

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



let quanDam = {
    "Name": "QuanDam",
    "Age": 19,
    "Role": ["Dev", "Content"],
    "University": "HSU",
    "Live": "HCMCity"
}

let tamNguyen = {
    "name": "Chi Tam",
    "age": 22,
    "gender": "male",
    "district": "Go Vap",
}

let c_Dau = {
    "name": "Hong Thao",
    "Role": "Police",
    "DOB": "null"
}

// Duy Quan
let a_Duy = {
    "name": "Hoang Duy",
    "Role": "Dev",
    "DOB": "null"
}

let a_Khuong = {
    "name": "Dang Khuong",
    "Role": "[dev,media]",
    "DOB": "null"
}

let duyQuanDSC = [c_Dau, a_Duy, a_Khuong];

let dsc = {
    "info": "Gioi thieu nhe nhe",
    "totalMember": 1,
    "workshops": [
    ],
    "members": [
        {
            "Name": "QuanDam",
            "Age": 19,
            "Role": [
                "Dev",
                "Content"
            ],
            "University": "HSU",
            "Live": "HCMCity"
        },
        {
            "Name": "Duy Quan",
            "Age": 19,
            "Role": [
                "Media"
            ],
            "University": "HSU",
            "Live": "HCMCity"
        }
    ]
}