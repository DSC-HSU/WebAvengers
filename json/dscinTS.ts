interface Member {
    name: string,
    role: Array<string>
}

interface DSC {
    members: Array<Member>
    // Desgin more if you like it :))
}

// Hmm look like some data format 💁🏻‍♂️?

var ourGroup: DSC = {
    members: [
        {
            "name": "DuyBeo", "role": ["Leader", "BOM"]
        }
    ]
}

console.log(ourGroup)

// Typescript is Javascript with typed system, OOP feature

// How it run?  Compile TS -> JS

// TSC -> .js file -> node .js file