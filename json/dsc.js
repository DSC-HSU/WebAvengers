let dsc = {
    "members": [
    ],
}

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

function appendDSCMember() {
    let listOfMember = ourGroupinExcel.split("\n")
    for (const memeberDetail of listOfMember) {
        let memberName = memeberDetail.split("-")[0]
        let memberRole = memeberDetail.split("-")[1]
        // console.log(role)
        dsc.members.push({
            name: memberName,
            role: memberRole.split(",")
        })
    }
    // console.log(dsc)
}
appendDSCMember();


// let do somethings
// Find who is role-less
// where is the (IntelliSense|Code completion) 💁🏻‍♂️? :)) haha Welcome to Javascript the madness langue
