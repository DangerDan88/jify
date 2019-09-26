$(document).ready(function () {
  /// array of initial buttons I want to create
  var buttons = ["Chicken and Waffles", "Pancakes", "Waffles", "Steak", "Oatmeal", "popeye's chicken sandwich",
    "turkey", "tortilla", "macaroni", "peanut butter", "bbq", "cinnamon roll", "bagel"];
  // function to try and save local storage you need to JSON parse to turn data into an object
  function localList() {
    var localButton = JSON.parse(localStorage.getItem('button'));


    buttons = localButton;
  }


  // first you need to empty div so it does not repeat buttons then make function to dynamically make my buttons from values of my array
  $("#images").empty();
  function makeButton() {
    for (var i = 0; i < buttons.length; i++) {
      var buttonName = buttons[i];
      var buttonDiv = $("<div>");
      var button = $("<button>");
      button.text(buttonName);
      button.attr("data-name", buttonName);
      $("#images").append(button);


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
  
})
