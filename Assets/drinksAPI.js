$(document).ready(function () {
console.log("hi");

  var randomDrinkURl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=bees_knees";
 
  $.ajax({
    url: randomDrinkURl,
    method: "GET",
  }).then(function (randomDrinkResponse) {
    console.log(randomDrinkResponse);
    console.log(typeof randomDrinkResponse.drinks[0]);
    console.log(randomDrinkResponse.drinks[0].strDrink);
    $("#drink-name").text(randomDrinkResponse.drinks[0].strDrink)
        console.log(randomDrinkResponse.drinks[0].strDrink)
    // console.log(randomDrinkResponse.drinks[0].strDrinkThumb);
    // console.log(randomDrinkResponse.drinks[0].strIngredient1);
    // console.log(randomDrinkResponse.drinks[0].strIngredient2);
    // console.log(randomDrinkResponse.drinks[0].strIngredient3);
    // console.log(randomDrinkResponse.drinks[0].strInstructions);

    // code to try to get ingredients, saving for later
    //   const drinksObject = randomDrinkResponse.drinks[0]
    //   for( const drinksProperty in drinksObject ){
    //       var  drinksIngredients =(`${drinksProperty}: ${drinksObject[drinksProperty]}`)
    //       console.log(drinksIngredients)
    //   }
    // still need to get the string
    // put ingdedients in a list item
  });
});

//Non Alcoholic Search. LOVE THESE!
//   var nonAlcoholicUrl= "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
//   $.ajax({
//   url: nonAlcoholicUrl,
//   method: "GET"
// })
//   .then(function(response) {
//       console.log(response);
//   })
