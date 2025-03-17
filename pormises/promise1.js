console.log("Start");


const sub= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const result =true
    if(!result) resolve(" this Promise is fulfill scussessfully")
       else { reject('the promise is not fulfill successfully')}
    },1000)
})

sub.then((res)=>console.log(res)).catch((err)=>console.log(err))


console.log("Stop")