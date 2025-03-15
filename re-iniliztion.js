function one() {
    console.log("Inside One");
    two();
  }
  
  function two() {
    console.log("Inside Two");
  }
  
  one();
  console.log("End");
  