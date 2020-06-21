$(document).ready(function() { 
    console.log("test function")

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
    };

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
            $("#drink-recipe-button").on("click", function () {
              $("#ingredients-text").empty();
              $("#recipe-text").empty();
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
                $("#ingredients-text").append("Ingredients: " + ingredientOne);
              }
              if (ingredientTwo) {
                $("#ingredients-text").append(", " + ingredientTwo);
              }
              if (ingredientThree) {
                $("#ingredients-text").append(", " + ingredientThree);
              }
              if (ingredientFour) {
                $("#ingredients-text").append(", " + ingredientFour);
              }
              if (ingredientFive) {
                $("#ingredients-text").append(", " + ingredientFive);
              }
              if (ingredientSix) {
                $("#ingredients-text").append(", " + ingredientSix);
              }
              if (ingredientSeven) {
                $("#ingredients-text").append(", " + ingredientSeven);
              }
              if (ingredientEight) {
                $("#ingredients-text").append(", " + ingredientEight);
              }
              if (ingredientNine) {
                $("#ingredients-text").append(", " + ingredientNine);
              }
              if (ingredientTen) {
                $("#ingredients-text").append(", " + ingredientTen);
              }
              if (ingredientEleven) {
                $("#ingredients-text").append(", " + ingredientEleven);
              }
              if (ingredientTwelve) {
                $("#ingredients-text").append(", " + ingredientTwelve);
              }
              if (ingredientThirteen) {
                $("#ingredients-text").append(", " + ingredientThirteen);
              }
              if (ingredientFourteen) {
                $("#ingredients-text").append(", " + ingredientFourteen);
              }
              if (ingredientFifteen) {
                $("#ingredients-text").append(", " + ingredientFifteen);
              }
              if (recipe) {
                $("#recipe-text").append(`<p>` + "Recipe: " + recipe + `</p>`);
              }
              
            });
          });
        
})
    }
        function clearJumbotron() {
            // var img = "<img id='ingredientIconUrl'>";
            $("#drinkPhotoUrl").attr("src", "");
            $("#nameOfDrink").text("")
            $(".currentIngredientName").text("");

            // $(".drinkIconUrl").attr("src", "");
            // $("#ingredient").text("");
          }
        })