let dsc = {
    "members": [
    ],
}

let ourGroupinExcel = `Trương Hoàng Duy (Leader)-Leader,BOM
Nguyễn Đăng Khương-BOM,
Nguyễn Vỏ Đăng Cao-BOM,Workshop Planer
Nguyễn Mạnh Hùng-BOM,
Đỗ Thị Hồng Thảo-BOM,HR
Nguyễn Thị Linh-Media,
Nguyễn Duy Quân-Dev,Media
Đàm Minh Quân-Dev,Content
Nguyễn Văn Anh-Dev
Lê Văn Bảo Nguyên-Dev
Nguyễn Cao Thắng-Media,
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
    console.log(dsc)
}
appendDSCMember();

// console.log(dsc.members[0].role)


let dictionary = {
    "dsc": {
        description: "Google Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community."
    },
    "covid-19": {
        description: "Coronavirus disease 2019 (COVID-19), also known as the coronavirus, or COVID, is a contagious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The first known case was identified in Wuhan, China, in December 2019.[7] The disease has since spread worldwide, leading to an ongoing pandemic"
    },
    "dsc": {
        a: "a"
    }
}

console.log(dictionary.dsc)
