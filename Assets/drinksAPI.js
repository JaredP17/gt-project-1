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
});