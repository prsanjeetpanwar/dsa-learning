const settings={
    userName:"Prsanjeet",
    age:23,
    home:3
}

const striggg=JSON.stringify(settings,["userName", "age"])
console.log(striggg)