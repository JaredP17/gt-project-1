console.log("LIVESTREAM LOGS");
var googleKey = "AIzaSyBQd8ZnnSkHadouS8UtIK6aEgjDnR6vlMo";
var queryURL = "https://www.googleapis.com/youtube/v3/search?";
var urlExample =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&q=ocean&videoEmbeddable=true&key=AIzaSyBQd8ZnnSkHadouS8UtIK6aEgjDnR6vlMo";
$.ajax({
  url: urlExample,
  method: "GET",
}).then(function (response) {
  console.log(response);
  for (var i = 0; i < response.items.length; i++) {
    $("#yt-videos").append(
      `<iframe width="560" height="315" src="https://www.youtube.com/embed/${response.items[i].id.videoId}" frameborder="0" controls="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
  }
});
