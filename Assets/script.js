$(document).ready(function () {


    var APIKey = "889cd95742cb4d318b134906ce82bcb0";
    var city = []
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.name);
        console.log("Temperature: " + response.main.temp + "°F");
        console.log("Wind Speed: " + response.wind.speed + " mph");

        var sunrise = (response.sys.sunrise);
        var date = new Date(sunrise * 1000);
        var time = date.toLocaleTimeString();
        console.log(time);
        console.log(time.split(":")[0] + ":" + time.split(":")[1] + " AM");

        var sunset = (response.sys.sunset);
        var date = new Date(sunset * 1000);
        var time2 = date.toLocaleTimeString();
        console.log(time2);
        console.log(time.split(":")[0] + ":" + time.split(":")[1] + " PM");
    })


    //Click on nav-bar, hides location.  I don't know if conditional works properly. 
$("#nav-bar").on("click", function(event){
    event.preventDefault();
    //if statement for "if main screen show, hide, if location screen, show"
   if($("#location-screen-container").css("display", "block")){
    ($("#location-screen-container").css("display", "none"))
   }
   else{($(this).attr("display", "none"))}
    console.log("nav-bar clicked");
})


})