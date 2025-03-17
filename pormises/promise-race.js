console.log("Start");

function subscribe(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`subscribe to ${userName}`);
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
      resolve(`share the ${video}`);
    }, 3000);
  });
}

// Execute race condition (only the fastest promise wins)
Promise.race([
  subscribe("JavaScript Mastery"),
  like("Promises Tutorial"),
  share("Promises Tutorial")
])
  .then((result) => {
    console.log(result); // Only the first settled promise will log
  })
  .catch((error) => {
    console.error("Something went wrong:", error);
  });

console.log("Stop");
