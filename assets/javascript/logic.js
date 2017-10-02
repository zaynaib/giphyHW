//API Key: ctte8ttiYbLnIrZqUneu1IsFkc2ru4jT
//dc6zaTOxFJmzC


//create an array of animals
var animalArray =["hamster","goat"];
//then add buttons to the dom of thepage

//get the value of text input from the user

//make a create button function
function createButton(arr){
	for(var i =0; i< arr.length; i++){
		var animalButton = $("<button>");
		animalButton.addClass("giphyAnimal");
		animalButton.attr("type","button");
		animalButton.attr("data-name",arr[i]);
		animalButton.html(arr[i]);
		$("#animal").append(animalButton);
	}

}
createButton(animalArray);

//var userInput;

//adds a button to the animal div
$("#addAnimal").on("click",function(event){
	event.preventDefault();
	var input=	getUserInput();
	animalArray.push(input);
	createButton(animalArray);
	console.log(animalArray);
	//var userQuery = getQueryString(input);
	//ajaxRequest(userQuery);

});


//get the users input
function getUserInput(){
	var userInput= $("#animal-input").val().trim();
	console.log(userInput);
	return userInput;

}

//put the users input into a query string
function getQueryString(str){
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    str + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log(queryURL);
    return queryURL;

}







  
//after getting the input call to the api
//append the button
//show gifs
//clear gifs


 




//make an api call request
function ajaxRequest(queryString){
      // Performing our AJAX GET request
      $.ajax({
          url: queryString,
          method: "GET"
        })
        // After the data comes back from the API
        .done(function(response) {
          // Storing an array of results in the results variable
          var results = response;
          console.log(results);
      });
      
  }
        