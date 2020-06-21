$(document).ready(function () {
  var APIKey = "889cd95742cb4d318b134906ce82bcb0";
  // var beachCityArray = ["Honolulu", "Miami", "Malibu", "Cancun", "Cape Cod"]
  var beachCity = "Miami";
  // var mountainCity = ["Breckenridge", "Park City Utah", "Mount Everest", "Mount Fuji", "Yosemeti"]
  // var cityCity = ["London", "Paris", "Tokyo","New York", "Dubai"]
  // var lakeCity = ["Lake Tahoe", "Lake Michigan", "Crater Lake", "Lake Powell", "Lake Superior"]
  // var space = ["space"]
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    beachCity +
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



    
  //Click on nav-bar, hides location.  I don't know if conditional works properly.
  $("#nav-bar").on("click", function (event) {
    event.preventDefault();
    //if statement for "if main screen show, hide, if location screen, show"
    if ($("#location-screen-container").css("display", "block")) {
      $("#location-screen-container").css("display", "none");
      $("#main-screen-container").css("display", "block");
      $("#location-video").each(function () {
        this.contentWindow.postMessage(
          '{"event":"command","func":"stopVideo","args":""}',
          "*"
        );
      });
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
  $("#return-home-button").on("click", function (event) {
    event.preventDefault();
    $("#main-screen-container").css("display", "block");
    $("#location-screen-container").css("display", "none");
    $("#location-video").each(function () {
      this.contentWindow.postMessage(
        '{"event":"command","func":"stopVideo","args":""}',
        "*"
      );
    });
  });
  //App assistance popover button. Not working yet.
  // $(function(){
  //   $('[data-toggle="popover"]').popover();   
  // });

$("#ingredient-page-button").on("click", function (event) {
    event.preventDefault();
    console.log("made it here",$("#drink-page-container"))
    $("#drink-page-container").show();
    $("#location-screen-container").hide();
})
if(localStorage.getItem("searchedIngredientList")) {
  let ingredientArray = JSON.parse(localStorage.getItem("searchedIngredientList"));
  for (var i = 0; i < ingredientArray.length; i++) {
    var a = $("<li>", {
      class: "list-group-item",
      click: function()
      {displayIngredientInfo(event, this);}
  })
  a.addClass("ingredient");
  a.attr("data-name", ingredientArray[i]);
  a.text(ingredientArray[i]);
  $("#ingredientList").prepend(a);
}
}

$("#add-ingredient").on("click", function (event) {
event.preventDefault();
var ingredient = $("#ingredient-input").val().trim();
if (!localStorage.searchedIngredientList){
  let ingredientList = []
  ingredientList.push(ingredient)
  console.log("ingredientList", ingredientList)
  localStorage.setItem("searchedIngredientList", JSON.stringify(ingredientList));
} else {
  let ingredientList = JSON.parse(localStorage.getItem("searchedIngredientList"));
  ingredientList.push(ingredient);
  localStorage.setItem("searchedIngredientList", JSON.stringify(ingredientList));
};
var a = $("<li>", {
  class: "list-group-item",
  click: function () {
      //when you console.log it shows when it's clicked, which city is being clicked
      console.log($(this));
      //this passes this element in this argument
      displayIngredientInfo(event, this);
  }
})
a.addClass("ingredient");
a.attr("data-name", ingredient);
a.text(ingredient)
$("#ingredientList").prepend(a);

});

function displayIngredientInfo(event, element) {
  clearJumbotron();
  console.log(event, element);

  var ingredient = $(element).text();
  var queryURl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient;
  
  $.ajax({
    url: queryURl,
    method: "GET",
  }).then(function(response) {
    console.log(response);
    $(".currentIngredientName").append(ingredient);
    var x = "";
    for (var i=0; i < 1; i++) {
        var random = Math.floor(Math.random() * (response.drinks.length));
        x = random + x;
          console.log(x);
    }
    var drink = response.drinks[x].strDrink
    $("#nameOfDrink").append("Drink Name: " + drink);

    var drinkPhotoUrl = response.drinks[x].strDrinkThumb;
    $("#drinkPhotoUrl").attr("src", drinkPhotoUrl);

    var randomDrinkURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink;
    $.ajax({
      url: randomDrinkURL,
      method: "GET",
    }).then(function (randomDrinkResponse) {
      console.log(randomDrinkResponse.drinks[0]);
      $("#drink-name").text(randomDrinkResponse.drinks[0].strDrink);
      var imgURL = randomDrinkResponse.drinks[0].strDrinkThumb;
      $("#drink-pic").attr("src", imgURL);
      //clicking button to show the drink ingredients and recipe
      $("#ingredient-recipe-button").on("click", function () {
        console.log("clicked from drink recipe")
        $("#ingredientsText").empty();
        $("#recipeText").empty();
        var ingredientOne = randomDrinkResponse.drinks[0].strIngredient1;
        var ingredientTwo = randomDrinkResponse.drinks[0].strIngredient2;
        var ingredientThree = randomDrinkResponse.drinks[0].strIngredient3;
        var ingredientFour = randomDrinkResponse.drinks[0].strIngredient4;
        var ingredientFive = randomDrinkResponse.drinks[0].strIngredient5;
        var ingredientSix = randomDrinkResponse.drinks[0].strIngredient6;
        var ingredientSeven = randomDrinkResponse.drinks[0].strIngredient7;
        var ingredientEight = randomDrinkResponse.drinks[0].strIngredient8;
        var ingredientNine = randomDrinkResponse.drinks[0].strIngredient9;
        var ingredientTen = randomDrinkResponse.drinks[0].strIngredient10;
        var ingredientEleven = randomDrinkResponse.drinks[0].strIngredient11;
        var ingredientTwelve = randomDrinkResponse.drinks[0].strIngredient12;
        var ingredientThirteen = randomDrinkResponse.drinks[0].strIngredient13;
        var ingredientFourteen = randomDrinkResponse.drinks[0].strIngredient14;
        var ingredientFifteen = randomDrinkResponse.drinks[0].strIngredient15;
        var recipe = randomDrinkResponse.drinks[0].strInstructions;
  
        if (ingredientOne) {
          $("#ingredientsText").append("Ingredients: " + ingredientOne);
        }
        if (ingredientTwo) {
          $("#ingredientsText").append(", " + ingredientTwo);
        }
        if (ingredientThree) {
          $("#ingredientsText").append(", " + ingredientThree);
        }
        if (ingredientFour) {
          $("#ingredientsText").append(", " + ingredientFour);
        }
        if (ingredientFive) {
          $("#ingredientsText").append(", " + ingredientFive);
        }
        if (ingredientSix) {
          $("#ingredientsText").append(", " + ingredientSix);
        }
        if (ingredientSeven) {
          $("#ingredientsText").append(", " + ingredientSeven);
        }
        if (ingredientEight) {
          $("#ingredientsText").append(", " + ingredientEight);
        }
        if (ingredientNine) {
          $("#ingredientsText").append(", " + ingredientNine);
        }
        if (ingredientTen) {
          $("#ingredientsText").append(", " + ingredientTen);
        }
        if (ingredientEleven) {
          $("#ingredientsText").append(", " + ingredientEleven);
        }
        if (ingredientTwelve) {
          $("#ingredientsText").append(", " + ingredientTwelve);
        }
        if (ingredientThirteen) {
          $("#ingredientsText").append(", " + ingredientThirteen);
        }
        if (ingredientFourteen) {
          $("#ingredientsText").append(", " + ingredientFourteen);
        }
        if (ingredientFifteen) {
          $("#ingredientsText").append(", " + ingredientFifteen);
        }
        if (recipe) {
          $("#recipeText").append(`<p>` + "Recipe: " + recipe + `</p>`);
        }
      });
    })
  })
}

  function clearJumbotron() {
      $("#drinkPhotoUrl").attr("src", "");
      $("#nameOfDrink").text("")
      $(".currentIngredientName").text("");
    }

  });