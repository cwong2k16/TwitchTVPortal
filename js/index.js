var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

$(document).ready(function(){
    for(var i = 0; i < users.length; i++){
        (function(i){
        $.getJSON('https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/streams/' + users[i], function(data) {
            console.log(data);
            if(data.stream === null){
                $("#test").append("<p> " + users[i] + "<a target = '_blank' href =" + "https://www.twitch.tv/" + users[i] + "> " + "<span class = 'red'>" + "OFFLINE</span>" + "</p>");
            }
            else{
                $("#test").append("<p> " + users[i] + "<a target = '_blank' href =" + "https://www.twitch.tv/" + users[i] + "> " + "<span class = 'green'>" + "ONLINE</span>" + "</a>" + " --Currently streaming " + data.stream.game + "</p>");
            }
        });   
      })(i)
    };
});