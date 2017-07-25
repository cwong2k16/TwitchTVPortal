var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "comster404", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var dataCache = [];
var currentDisplay = "all";

$(document).ready(function(){
    for(var i = 0; i < users.length; i++){
        (function(i){
        $.getJSON('https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/channels/' + users[i], function(data) {
            if(data.status === 404){
                var text = "<p> " + users[i] + ": <span class = 'red'>DOESN'T EXIST</span></p>";
                dataCache.push({"name": users[i], "text": text, "status": "invalid"});
                $("#test").append(text);
            }
            else{
                $.getJSON('https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/streams/' + users[i], function(data) {
                if(data.stream === null){
                    var text = "<p> " + users[i] + ":<a target = '_blank' href =" + "https://www.twitch.tv/" + users[i] + "> " + "<span class = 'red'>" + "OFFLINE</span>" + "</p>";
                    dataCache.push({"name": users[i], "text": text, "status": "offline"});
                    $("#test").append(text);
                }
                else{
                    var text = "<p> " + users[i] + ":<a target = '_blank' href =" + "https://www.twitch.tv/" + users[i] + "> " + "<span class = 'green'>" + "ONLINE</span>" + "</a>" + " --Currently streaming " + data.stream.game + "</p>";
                    dataCache.push({"name": users[i], "text": text, "status": "online"});
                    $("#test").append(text);
                }
              });
            }
        });   
      })(i)
    };
    $("#all").click(function(){
        if(currentDisplay !== "all"){
            currentDisplay = "all";
            $("#test").empty();
            for(var i = 0; i < dataCache.length; i++){
                $("#test").append(dataCache[i].text);
            }
        }
    });
    $("#online").click(function(){
        if(currentDisplay !== "online"){
            currentDisplay = "online";
            $("#test").empty();
            for(var i = 0; i < dataCache.length; i++){
                if(dataCache[i].status === "online"){
                    $("#test").append(dataCache[i].text);
                }
            }
        }
    });
    $("#offline").click(function(){
        if(currentDisplay !== "offline"){
            currentDisplay = "offline";
            $("#test").empty();
            for(var i = 0; i < dataCache.length; i++){
                if(dataCache[i].status === "offline"){
                    $("#test").append(dataCache[i].text);
                }
            }
        }
    });
});