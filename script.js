$(document).ready(function () {
  var cities = [];
  var APIKey = "19a0504277534924261213bbaabf5bbe";

  function cityButtons() {
    $("#cities-list").empty();
    for (var i = 0; i < cities.length; i++) {
      var a = $("<button>");
      a.addClass("newCity");
      a.attr("city-name", cities[i]);
      a.text(cities[i]);
      $("#cities-list").append(a);
      console.log("movie");
    }
  }

  $("#searchButton").on("click", function (event) {
    event.preventDefault();
    var city = $("#city").val().trim();
    cities.push(city);
    cityButtons();
  });
  //create var that links queryURL with API Key
  //get data attribute from search click event to link with a function
  //includes queryURL + "attr" + APIKey
});
