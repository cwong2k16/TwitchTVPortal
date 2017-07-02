$(document).ready(function(){
    $.getJSON('https://crossorigin.me/https://api.twitch.tv/kraken/streams/freecodecamp', function(data) {
      $("#test").html(data);
    });
});