$(document).ready(function () {
  $("button").on('click', function() {
    var foodItem = $(this).attr("data-food");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=yiS35kD94qAKbsiCeW8EDDgmQJb3JlOA&q=" + foodItem +
      "&limit=10&offset=0&rating=PG&lang=en";
    $.ajax({
        url: queryUrl,
        method: "GET"
      }).then(function (response) {
          console.log(response);
          var x = response.data;
          for (i = 0; i < x.length; i++) {
            var foodContainer = $("<div>");
            var foodPic = $("<img>");
            foodPic.attr('src',x[i].images.downsized.url);
            foodContainer.append(foodPic);
            $("#images").prepend(foodContainer);
          }
      })
  })

})