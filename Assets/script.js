$(document).ready(function () {
var APIKey = "889cd95742cb4d318b134906ce82bcb0";
    // var beachCityArray = ["Honolulu", "Miami", "Malibu", "Cancun", "Cape Cod"]
    var beachCity = "Miami";
    // var mountainCity = ["Breckenridge", "Park City Utah", "Mount Everest", "Mount Fuji", "Yosemeti"]
    // var cityCity = ["London", "Paris", "Tokyo","New York", "Dubai"]
    // var lakeCity = ["Lake Tahoe", "Lake Michigan", "Crater Lake", "Lake Powell", "Lake Superior"]
    // var space = ["space"]
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + beachCity + "&units=imperial&appid=" + APIKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        $(".cityName").append(response.name);
        $("#temp").append("Temp: " + response.main.temp + "°F");
        $("#windSpeed").append("Wind: " + response.wind.speed + " mph");
        var weatherIconEl = response.weather[0].icon;
        var weatherIconUrl ="https://openweathermap.org/img/w/" + weatherIconEl + ".png";
        $("#weatherIconUrl").attr("src", weatherIconUrl);
        var sunrise = (response.sys.sunrise);
        var date = new Date(sunrise * 1000);
        var time = date.toLocaleTimeString();
        $("#sunrise").append($("#sunriseTime").append(time.split(":")[0] + ":" + time.split(":")[1] + " AM"));
        var sunset = (response.sys.sunset);
        var date = new Date(sunset * 1000);
        var time2 = date.toLocaleTimeString();
        $("#sunset").append($("#sunsetTime").append(time2.split(":")[0] + ":" + time2.split(":")[1] + " PM"));
        console.log(time2);
        console.log(time2.split(":")[0] + ":" + time2.split(":")[1] + " PM");
    })



  //Click on nav-bar, hides location.  I don't know if conditional works properly.
  $("#nav-bar").on("click", function (event) {
    event.preventDefault();
    //if statement for "if main screen show, hide, if location screen, show"
    if ($("#location-screen-container").css("display", "block")) {
      $("#location-screen-container").css("display", "none");
      $("#main-screen-container").css("display", "block");
    } else {
    }
    console.log("nav-bar clicked");
  });

  //Mountain-Button Click display location, hide home.
  //   $("#mountain-button").on("click", function (event) {
  //     event.preventDefault();
  //     console.log("Mountain Button Clicked");
  //     $("#main-screen-container").css("display", "none");
  //     $("#location-screen-container").css("display", "block");
  //   });

  //Location button click with values
  $(".location-button").on("click", function (event) {
    event.preventDefault();
    console.log($(this).val());
    $("#main-screen-container").css("display", "none");
    $("#location-screen-container").css("display", "block");
  });


//Return to main screen button "New Destination"
//Get video to stop if still playing. 
$("#return-home-button").on("click", function(event){
  event.preventDefault();
  $("#main-screen-container").css("display", "block");
  $("#location-screen-container").css("display", "none");
  $("#location-video").each(function(){
    this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
  });
});

});
