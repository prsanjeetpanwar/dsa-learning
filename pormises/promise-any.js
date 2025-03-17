console.log("Start");

const p1 = new Promise((_, reject) => setTimeout(() => reject("P1 failed"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("P2 done"), 2000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("P3 done"), 3000));

// Using Promise.any()
Promise.any([p1, p2, p3])
  .then((result) => console.log("Promise.any result:", result))
  .catch((error) => console.error("Promise.any failed:", error));

console.log("Stop");
