var friendsData = require("../data/friends");
var path = require('path');
var totalDifference = 0;
module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });



  app.post("/api/friends", function(req, res) {
       var friendMatch = {
         name: "",
         image: "",
         matchDifference: 1000
       };
       var userData = req.body;
       var userName = userData.name;
       var userImage = userData.image;
       var userScores = userData.scores;
       
       var totalDifference = 0;

        for (var i = 0; i < friendsData.length; i++){
          console.log(friendsData[i].name);
          totalDifference = 0
        
        for(var j = 0; j < 10; j++){
          // We calculate the difference between the scores and sum them into the totalDifference
          totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));
          // If the sum of differences is less then the differences of the current "best match"
          if (totalDifference <= friendMatch.friendDifference){
  
           
            friendMatch.name = friendsData[i].name;
            friendMatch.photo = friendsData[i].photo;
            friendMatch.matchDifference = totalDifference;
          }
        }
      }
  
      friends.push(userData);
   
  res.json(friendMatch);
    
  });

}
