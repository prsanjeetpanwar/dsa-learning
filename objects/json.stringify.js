const a={
    name:"Prsanjeet",
    age:21,
    class:"12th"
}

const stringify=JSON.stringify(a)
console.log(stringify)
const parsedata= JSON.parse(stringify)
console.log(parsedata)