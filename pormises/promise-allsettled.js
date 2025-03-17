console.log("Start");

function subscribe(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Failed to subscribe to ${userName}`); // Simulating failure
    }, 1000);
  });
}

function like(video) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Liked the ${video}`);
    }, 2000);
  });
}

function share(video) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Shared the ${video}`);
    }, 3000);
  });
}

// Runs all promises and waits for all to complete
Promise.allSettled([
  subscribe("JavaScript Mastery"), // Fails in 1s
  like("Promises Tutorial"), // Resolves in 2s
  share("Promises Tutorial") // Resolves in 3s
])
  .then((results) => {
    console.log("All operations completed:");
    console.log(results); // Logs the status of each promise
  });

console.log("Stop");
