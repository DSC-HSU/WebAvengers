let dsc = {
    "members": [
    ],
}
// CSV -> ";" -> Excel

//[What is it] -> It ours club data as text each collum separate with "-"
// Each line has a breake ("\n")
let ourGroupinExcel = `Trương Hoàng Duy (Leader)-Leader,BOM
Nguyễn Đăng Khương-BOM
Nguyễn Vỏ Đăng Cao-BOM,Workshop Planer
Nguyễn Mạnh Hùng-BOM
Đỗ Thị Hồng Thảo-BOM,HR
Nguyễn Thị Linh-Media
Nguyễn Duy Quân-Dev,Media
Đàm Minh Quân-Dev,Content
Nguyễn Văn Anh-Dev
Lê Văn Bảo Nguyên-Dev
Nguyễn Cao Thắng-Media
Trần Duy Khánh-Content
Nguyễn Chí Tâm-`

console.log("Before", dsc)
function appendDSCMember() {
    //[Spilting text where "\n" into array]
    let listOfMember = ourGroupinExcel.split("\n")

    // [Loop] over arr to get the name, roles of member
    for (const memeberDetail of listOfMember) {
        let memberName = memeberDetail.split("-")[0] // name
        let memberRole = memeberDetail.split("-")[1] // Role
        // console.log(role)
        dsc.members.push({
            name: memberName,
            role: memberRole.split(",")
        })
    }
    // console.log(dsc)
}

function find(input, callback) {
    // 1,2,3
    // {Role},{Role},{Role}
    let result = []
    for (const iterator of input) {
        if (callback(iterator)) { // callback -> Process [] -> true/false {}
            result.push(iterator)
        }
    }
    return result
}
appendDSCMember();
console.log(dsc.members)
// console.log("After", dsc.members[1])

// [Custom filter on Role]
function filterByRole(memberDetail) {

    // memberDetail as {name,role:[]}
    for (const iterator of memberDetail["role"]) {
        if (iterator == "Dev") {
            return true
        }
    }
    return false;
}

let result = find(dsc.members, filterByRole);
// console.log(result)



// let do somethings
// Find who is role-less
// where is the (IntelliSense|Code completion) 💁🏻‍♂️? :)) haha Welcome to Javascript the madness langue
