function asyncTask() {
    console.log("3. Async task started");
    setTimeout(() => {
        console.log("5. Async task completed");
    }, 2000);
}
function syncTask() {
    console.log("1. Sync task started");
    let result = 5 + 10; // simple math operation
    console.log("2. Sync task completed:", result);
}


asyncTask(); 
syncTask();  // Executes immediately
// Moves to Web API
console.log("4. End of script"); // Executes while async task is waiting
