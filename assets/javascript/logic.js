//API Key: ctte8ttiYbLnIrZqUneu1IsFkc2ru4jT
//dc6zaTOxFJmzC


//create an array of animals
var animalArray =["hamster","goat","dog"];
//then add buttons to the dom of thepage

//get the value of text input from the user

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

//adds a button to the animal div
$("#addAnimal").on("click",function(event){
	event.preventDefault();
	var userInput= getUserInput();
	animalArray.push(userInput);
	createButton(animalArray);
	//console.log(animalArray);
	

});

//action for new animaButtons

$(".giphy").on("click",function(){
	
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
          console.log(results);
          for(var i=0;i<results.length; i++){
          	//var animalDiv = $()
          	var animalImage = $("<img>");
          	animalImage.attr('src',results[i].images.fixed_height.url);
          	animalImage.attr("data-state", "still");
          	$("#gifs").empty();
          	$("#gifs").append(animalImage);
          }

          //get the still images
          //get the action images
      });
	

});











	//add 5 images to the dom of giphys animals
	
	//var stillImage = 

	//when the giphy images are clicked it becomes animated


function animalButtons(){

}

function animalImages(){

}

//have to use the this keyword. 
//every time the user hits of an but of class of giphy animal
//it will call to the api




//get the users input
function getUserInput(){
	var userInput= $("#animal-input").val().trim();
	console.log(userInput);
	return userInput;

}

//put the users input into a query string
function getQueryString(str){
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    str + "&api_key=dc6zaTOxFJmzC&limit=3";
    console.log(queryURL);
    return queryURL;

}







  
//after getting the input call to the api
//append the button
//show gifs
//clear gifs


 



//make an api call request
/*
function ajaxRequest(queryString){
      // Performing our AJAX GET request
      $.ajax({
          url: queryString,
          method: "GET"
        })
        // After the data comes back from the API
        .done(function(response) {
          // Storing an array of results in the results variable
          var results = response.data;
          //console.log(results);
          return results;

          //get the still images
          //get the action images
      });
      
  }
    */