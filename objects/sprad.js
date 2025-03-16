console.log([..."newrefdss"])


const user={name:"Prsanjeet panawawe", age:32}
const admin={admin:true,...user}
console.log(admin)


// output

//     'n', 'e', 'w',
//     'r', 'e', 'f',
//     'd', 's', 's'
//   ]
//   PS D:\Projects\dsa_files> node "d:\Projects\dsa_files\objects\sprad.js"
//   [
//     'n', 'e', 'w',
//     'r', 'e', 'f',
//     'd', 's', 's'
//   ]
//   { admin: true, name: 'Prsanjeet panawawe', age: 32 }
//   PS D:\Projects\dsa_files>