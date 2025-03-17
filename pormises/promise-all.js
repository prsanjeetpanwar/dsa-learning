console.log("Start");


function subscribe(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`subscribe the ${userName}`);
    }, 1000);
  });
}

function like(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`like the ${video}`); 
    }, 2000);
  });
}

function share(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`share this ${video}`);
    }, 3000);
  });
}


Promise.all([
    subscribe('prsnajeet'),
    like("like this video"),
    share("share this video")
]).then((results)=>{
    results.forEach((res)=>{
        console.log("this response is ", res)
       
    })
    console.log("All operations completed!");
}).catch((err)=>{
    console.log(err)
})

console.log("Stop");