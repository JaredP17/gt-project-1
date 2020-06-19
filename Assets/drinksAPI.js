$(document).ready(function () {
  console.log("hi");


  var randomDrinkURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  $.ajax({
    url: randomDrinkURL,
    method: "GET",
  }).then(function (randomDrinkResponse) {
    console.log(randomDrinkResponse.drinks[0])
    $("#drink-name").text(randomDrinkResponse.drinks[0].strDrink);
    var imgURL = randomDrinkResponse.drinks[0].strDrinkThumb;;
    $("#drink-pic").attr("src", imgURL);
  });


  // var margaritaDrinkURL =
  //   "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  // $.ajax({
  //   url: margaritaDrinkURL,
  //   method: "GET",
  // }).then(function (margaritaDrinkResponse) {
  //   $("#drink-name").text(margaritaDrinkResponse.drinks[0].strDrink);
  //   var imgURL =
  //     "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg";
  //   $("#drink-pic").attr("src", imgURL);
    // $("#ingredient1").text(margaritaDrinkResponse.drinks[0].strIngredient1);
    // $("#ingredient2").text(margaritaDrinkResponse.drinks[0].strIngredient2);
    // $("#ingredient3").text(margaritaDrinkResponse.drinks[0].strIngredient3);
    // $("#drink-recipe").text(margaritaDrinkResponse.drinks[0].strInstructions);
  // });

  // var manhattanDrinkURL =
  // "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=manhattan";
  // $.ajax({
  //   url: manhattanDrinkURL,
  //   method: "GET",
  // }).then(function (manhattanDrinkResponse) {
  //   $("#drink-name").text(manhattanDrinkResponse.drinks[0].strDrink);
  //   var imgURL = manhattanDrinkResponse.drinks[0].strDrinkThumb;
  //   $("#drink-pic").attr("src", imgURL);
  //   console.log(manhattanDrinkResponse.drinks[0]);
  //   $("#ingredient1").text(manhattanDrinkResponse.drinks[0].strIngredient1);
  //   $("#ingredient2").text(manhattanDrinkResponse.drinks[0].strIngredient2);
  //   $("#ingredient3").text(manhattanDrinkResponse.drinks[0].strIngredient3);
  //   $("#ingredient4").text(manhattanDrinkResponse.drinks[0].strIngredient4);
  //   $("#drink-recipe").text(manhattanDrinkResponse.drinks[0].strInstructions);

  // });

    // code to try to get ingredients, saving for later
    //   const drinksObject = randomDrinkResponse.drinks[0]
    //   for( const drinksProperty in drinksObject ){
    //       var  drinksIngredients =(`${drinksProperty}: ${drinksObject[drinksProperty]}`)
    //       console.log(drinksIngredients)
    //   }
    // still need to get the string
    // put ingdedients in a list item
  
});