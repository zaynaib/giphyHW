//API Key: ctte8ttiYbLnIrZqUneu1IsFkc2ru4jT
//dc6zaTOxFJmzC


//create an array of animals
var animalArray =["hamster","goat","dog"];


function getUserInput(){
	var userInput= $("#animal-input").val().trim();
	console.log(userInput);
	return userInput;

}

//put the users input into a query string
function getQueryString(str){
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    str + "&api_key=dc6zaTOxFJmzC&limit=5";
    console.log(queryURL);
    return queryURL;

}

//make a create button function
function createButton(arr){
	$("#animal").empty();
	for(var i =0; i< arr.length; i++){
		var animalButton = $("<button>");
		animalButton.addClass("giphy");
		animalButton.attr("type","button");
		animalButton.attr("data-name",arr[i]);
		animalButton.text(arr[i]);
		$("#animal").append(animalButton);
	}

}
createButton(animalArray);

//var userInput;

//adds a button to the animal div when the sumbit button is clicked
$("#addAnimal").on("click",function(event){
	event.preventDefault();
	var userInput= getUserInput();
	animalArray.push(userInput);
	createButton(animalArray);
	//console.log(animalArray);
	

});

//action for new animalButtons
function giphInfo(){
$(".giphy").on("click",function(){
	//empty the gifs div so animals can be replace everytime button is clicked
	$("#gifs").empty();
	var myAnimal = $(this).attr("data-name");
	console.log(myAnimal);

	//create query string
	var queryString=getQueryString(myAnimal);

	//call to the api
	$.ajax({
          url: queryString,
          method: "GET"
        })
        // After the data comes back from the API
        .done(function(response) {
          // Storing an array of results in the results variable
          var results = response.data;
          //console.log(results);
          var animalDiv = $("<div id=giphyAnimalsDiv>");
          //console.log(results.length);

          for(var i=0;i<results.length; i++){
          	//animalDiv.empty();

          	var animalImage = $("<img>");
          	animalImage.attr('src',results[i].images.fixed_height_still.url);
          	animalImage.attr("data-state", "still");
          	animalImage.attr("data-still", results[i].images.fixed_height_still.url);
          	animalImage.attr("data-animate", results[i].images.fixed_height.url);
          	animalImage.addClass("animalGifs");
          	$("#giphyAnimalsDiv").append(animalImage);
          	
          }
          $("#gifs").append(animalDiv);

          //get the still images
          //get the action images
      });
	

});
}
// Adding a click event listener to all elements with a class of "giphy"
$(document).on("click", ".giphy", giphInfo);


//action for the giphs active and still states

function clickedAnimals(){
$(".animalGifs").on("click", function(){
	var gifState = $(this).attr("data-state");
	console.log(gifState);
	if (gifState === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });
}
$(document).on("click", ".animalGifs", clickedAnimals);


 
	














 



