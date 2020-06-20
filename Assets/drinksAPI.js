$(document).ready(function () {
  console.log("hi");
  // generating random drinks
  var randomDrinkURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
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
      
    

      // $("#ingredients-text").append(`<p>` + "Ingredients: " + ingredientOne + ", " + ingredientTwo +", " + ingredientThree +", " + ingredientFour +`</p>`)
      // $("#recipe-text").append(`<p>` + "Recipe: " + recipe+`</p>`)

      // const drinksObject = randomDrinkResponse.drinks[0]
      // for( const drinksProperty in drinksObject ){
      //   console.log(drinksIngredients)
      //     var  drinksIngredients =(`${drinksProperty}: ${drinksObject[drinksProperty]}`)
      //     }
    });
  });
});

// code to try to get ingredients, saving for later
