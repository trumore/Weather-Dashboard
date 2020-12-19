$(document).ready(function () {
  var cities = [];
  var city;
  function cityButtons() {
    $("#cities-list").empty();
    for (var i = 0; i < cities.length; i++) {
      var a = $("<button>");
      a.addClass("newCity");
      a.attr("city-name", cities[i]);
      a.text(cities[i]);
      $("#cities-list").append(a);
    }
  }

  $("#searchButton").on("click", function (event) {
    event.preventDefault();
    var city = $("#city").val();
    cities.push(city);
    cityButtons();
    var queryURL =
      "https:api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=19a0504277534924261213bbaabf5bbe";

    var queryURL2 =
      "https:api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=19a0504277534924261213bbaabf5bbe";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      $(".currentName").text(response.name);
      var adjustedTemp = response.main.temp * (9 / 5) - 459.67;
      $(".temperature").text("Current Temperature is: " + adjustedTemp + "°F");
      //need to change the temp return to minimize decimal places
      $(".humidity").text("Humidity:" + response.main.humidity + "%");
      $(".wind").text("Wind Speed is: " + response.wind.speed + "MPH");
    });

    $.ajax({
      url: queryURL2,
      method: "GET",
    }).then(function (response) {
      console.log(response);
    });
  });
  //create var that links queryURL with API Key
  //get data attribute from search click event to link with a function
  //includes queryURL + "attr" + APIKey
});
