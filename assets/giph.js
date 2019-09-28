$(document).ready(function () {
  /// array of initial buttons I want to create
  var buttons = ["Chicken and Waffles", "Pancakes", "Waffles", "Steak", "Oatmeal", "popeye's chicken sandwich",
    "turkey", "tortilla", "macaroni", "peanut butter", "bbq", "cinnamon roll", "bagel"];
  // function to try and save local storage you need to JSON parse to turn data into an object
  function localList() {
    var localButton = JSON.parse(localStorage.getItem('button'));


    buttons = localButton;
  }

var x ="";
  // first you need to empty div so it does not repeat buttons then make function to dynamically make my buttons from values of my array
  $("#images").empty();
  function makeButton() {
   buttons = ["Chicken and Waffles"];
    for (var i = 0; i < buttons.length; i++) {
      var buttonName = buttons[i];
      var buttonDiv = $("<div>");
      var button = $("<button>");
      button.text(buttonName);
      button.attr("data-name",buttonName);
      $("#images").append(button);
        x = buttonName;

    }
    // this saves my buttons array to local storage you need stringify so it can read it.
    localStorage.setItem('button', JSON.stringify(buttons));
  }
  // calling functions
  localList();
  makeButton();



  // function to add new buttons that the user enters and you need to empty div again so no repeat buttons
  $("#searchButton").on('click', function (event) {
    event.preventDefault();
    var value = $('#userInput').val().trim();
    
    $("#images").empty();
    buttons.push(value);
    makeButton();

     




  })
  $("button").on('click', function(){
    console.log(x);
    console.log($(this).attr("data-name"))
     if( ($(this).attr("data-name"))!=undefined){
      x=$(this).attr("data-name")
     }
   
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +  x + "&api_key=yiS35kD94qAKbsiCeW8EDDgmQJb3JlOA&limit=12&offset=0&rating=G&lang=en";
    console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"

    }).then(function(response){
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
      var results = response.data;
      console.log(results);    
      var gifDiv = $("<div>");
      var rating = results[0].rating;
      var ratingP = $("<p>").text("Rated:" + rating[0]);
      var gifImage = $("<img>").attr('src',results[i].images.downsized.url);
      
      gifDiv.append(ratingP);
      gifDiv.append(gifImage);

      
      $("#gif").prepend(gifDiv);



    }})
    

  })

})
