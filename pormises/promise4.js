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



async function userActions() {
  const sub = await subscribe("JavaScript Mastery");
  console.log(sub);

  const liked = await like("Promises Tutorial");
  console.log(liked);

  const shared = await share("Promises Tutorial");
  console.log(shared);

  console.log("All actions completed!");
}

userActions();



console.log("Stop");