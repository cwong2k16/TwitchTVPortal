var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "comster404", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

var currentDisplay = "all";

$(document).ready(function(){
    for(var i = 0; i < users.length; i++){
        (function(i){
        $.getJSON('https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/channels/' + users[i], function(data) {
            console.log(data);
            if(data.status === 404){
                $("#test").append("<p> " + users[i] + ":<span class = 'red'>" + " DOESN'T EXIST!!</span>" + "</p>");
                users[i].status = "invalid";
            }
            else{
                $.getJSON('https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/streams/' + users[i], function(data) {
                if(data.stream === null){
                    $("#test").append("<p> " + users[i] + ":<a target = '_blank' href =" + "https://www.twitch.tv/" + users[i] + "> " + "<span class = 'red'>" + "OFFLINE</span>" + "</p>");
                    users[i].status = "offline"
                }
                else{
                    $("#test").append("<p> " + users[i] + ":<a target = '_blank' href =" + "https://www.twitch.tv/" + users[i] + "> " + "<span class = 'green'>" + "ONLINE</span>" + "</a>" + " --Currently streaming " + data.stream.game + "</p>");
                    users[i].status = "online";
                }
              });
            }
        });   
      })(i)
    };
    $("#all").click(function(){
        if(currentDisplay !== "all"){
            currentDisplay == "all";
            $("#test").empty();
        }
    });
});