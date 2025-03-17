console.log("Start");

function subscribe(userName, cb) {
  setTimeout(() => {
    cb(`subscribe to ${userName}`);
  }, 0);
}

function like(video, cb) {
  setTimeout(() => {
    cb(`like this video ${video}`);
  }, 500);
}

function share(video, cb) {
  setTimeout(() => {
    cb(`share the video ${video}`);
  });
}

// Creating callback hell by nesting callbacks
subscribe("JavaScript Mastery", function(subscribeMessage) {
  console.log(subscribeMessage);
  
  like("Callback Tutorial", function(likeMessage) {
    console.log(likeMessage);
    
    share("Callback Tutorial", function(shareMessage) {
      console.log(shareMessage);
      
      subscribe("Web Dev Simplified", function(anotherSubscribeMessage) {
        console.log(anotherSubscribeMessage);
        
        like("Promises Tutorial", function(anotherLikeMessage) {
          console.log(anotherLikeMessage);
          
          share("Promises Tutorial", function(anotherShareMessage) {
            console.log(anotherShareMessage);
            
            console.log("All operations completed!");
          });
        });
      });
    });
  });
});

console.log("Stop");


/// this is example with the callback hell