$(document).ready(function () {
  var APIKey = "889cd95742cb4d318b134906ce82bcb0"; // Open Weather
  var beachCity = ["Honolulu", "Miami", "Malibu", "Cancun", "Nantucket"]
  var mountainCity = ["Breckenridge", "Park City", "vail", "Gatlinburg", "Zurich"]
  var cityCity = ["London", "Paris", "Tokyo","New York", "Dubai"]
  var lakeCity = ["Chelan", "Branson", "Saugatuck", "Sand Point", "Lake George"]
  var space = ["Moon", "Mars", "Saturn", "Sun", "Pluto"]

  $("#beach-button").on("click", function() {
    for (var i=0; i < 1; i++) {
      var num = Math.floor(Math.random() * 5);
      var city = (beachCity[num]);
      weatherCall (city);
      clearWeather();
    }
  })
  $("#mountain-button").on("click", function() {
    for (var i=0; i < 1; i++) {
      var num = Math.floor(Math.random() * 5);
      var city = (mountainCity[num]);
      weatherCall (city);
      clearWeather();
    }
  })
  $("#city-button").on("click", function() {
    for (var i=0; i < 1; i++) {
      var num = Math.floor(Math.random() * 5);
      var city = (cityCity[num]);
      weatherCall (city);
      clearWeather();
    }
  })
  $("#lake-button").on("click", function() {
    for (var i=0; i < 1; i++) {
      var num = Math.floor(Math.random() * 5);
      var city = (lakeCity[num]);
      weatherCall (city);
      clearWeather();
    }
  })
  $("#space-button").on("click", function() {
    for (var i=0; i < 1; i++) {
      var num = Math.floor(Math.random() * 5);
      var city = (space[num]);
      weatherCall (city);
      clearWeather();
    }
  })

  function weatherCall (city) {
    console.log(city);
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=" +
    APIKey;
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    $(".cityName").append(response.name);
    $("#temp").append("Temp: " + response.main.temp + "°F");
    $("#windSpeed").append("Wind: " + response.wind.speed + " mph");
    var weatherIconEl = response.weather[0].icon;
    var weatherIconUrl =
      "https://openweathermap.org/img/wn/" + weatherIconEl + ".png";
    $("#weatherIconUrl").attr("src", weatherIconUrl);
    var sunrise = response.sys.sunrise;
    var date = new Date(sunrise * 1000);
    var time = date.toLocaleTimeString();
    $("#sunrise").append(
      $("#sunriseTime").append(
        time.split(":")[0] + ":" + time.split(":")[1] + " AM"
      )
    );
    var sunset = response.sys.sunset;
    var date = new Date(sunset * 1000);
    var time2 = date.toLocaleTimeString();
    $("#sunset").append(
      $("#sunsetTime").append(
        time2.split(":")[0] + ":" + time2.split(":")[1] + " PM"
      )
    );
    console.log(time2);
    console.log(time2.split(":")[0] + ":" + time2.split(":")[1] + " PM");
  });
  }

  function clearWeather() {
    $(".cityName").text("");
    $("#temp").text("");
    $("#windSpeed").text("");
    $("#weatherIconUrl").attr("src", "");
    $("#sunriseTime").text("");
    $("#sunsetTime").text("");
    }

  //Click on nav-bar, hides location.  I don't know if conditional works properly.
  // $("#navbar-link").on("click", function (event) {
  //   event.preventDefault();
  //   //if statement for "if main screen show, hide, if location screen, show"
  //   if ($("#location-screen-container").css("display", "block")) {
  //     $("#location-screen-container").css("display", "none");
  //     $("#main-screen-container").css("display", "block");
  //     $("#location-video").each(function () {
  //       this.contentWindow.postMessage(
  //         '{"event":"command","func":"stopVideo","args":""}',
  //         "*"
  //       );
  //     });
  //   } else {
  //   }
  //   console.log("nav-bar clicked");
  // });

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
    $("#main-screen-container").css("display", "none");
    $("#location-screen-container").css("display", "block");
    var destination = $(this).val();
    $("#destination").text(destination.toUpperCase());

    // Change background and load content based on selection
    console.log(destination);

    switch (destination) {
      case 'beach': {
        console.log("test");
        $("body").css("background-image", "url('./Assets/Images/beach-2/3958768.jpg')");
        break;
      }
      case 'mountain': {
        $("body").css("background-image", "url('./Assets/Images/mountains-1/3443490.jpg')");
        break;
      }
      case 'city': {
        $("body").css("background-image", "url('./Assets/Images/city-2/37030.jpg')");
        break;
      }
      case 'lake': {
        $("body").css("background-image", "url('./Assets/Images/lake-1/1868.jpg')");
        break;
      }
      case 'space': {
        $("body").css("background-image", "url('./Assets/Images/space-1/32042.jpg')");
        break;
      }
      default:
        break;
    }

    $(".navbar-toggle").addClass("collapsed");
    $(".navbar-collapse").removeClass("show");
  });

  //Return to main screen button "New Destination"
  //Get video to stop if still playing.
  
  //App assistance popover button. Not working yet.
  // $(function(){
  //   $('[data-toggle="popover"]').popover();   
  // });

  function clearJumbotron() {
      $("#drinkPhotoUrl").attr("src", "");
      $("#nameOfDrink").text("")
      $(".currentIngredientName").text("");
    }


  });