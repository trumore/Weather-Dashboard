$(document).ready(function () {
  var cities = [];
  var city;
  function cityButtons() {
    $("#cities-list").empty();
    for (var i = 0; i < cities.length; i++) {
      var a = $("<button>");
      a.addClass("btn btn-primary newCity");
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
      $(".temperature").text(
        "Current Temperature is: " + adjustedTemp.toFixed(1) + "°F"
      );

      $(".humidity").text("Humidity:" + response.main.humidity + "%");
      $(".wind").text("Wind Speed is: " + response.wind.speed + "MPH");
      var currentSlide = response.weather[0].icon;
      var getImage =
        "http://openweathermap.org/img/wn/" + currentSlide + "@2x.png";
      $(".currentImage").attr("src", getImage);
    });

    $.ajax({
      url: queryURL2,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      var getDate1 = luxon.DateTime.fromSeconds(
        response.list[0].dt
      ).toLocaleString({
        month: "short",
        day: "2-digit",
      });
      console.log(getDate1);
      $(".day1date").text("Date: " + getDate1);
      var futureTempCalc = response.list[2].main.temp * (9 / 5) - 459.67;
      $(".day1temp").text("Temp: " + futureTempCalc.toFixed(1) + "°F");
      $(".day1hum").text("Humidity: " + response.list[2].main.humidity + "%");
      var day1Slide = response.list[2].weather[0].icon;
      var getday1Image =
        "http://openweathermap.org/img/wn/" + day1Slide + "@2x.png";
      $("#day1image").attr("src", getday1Image);

      var getDate2 = luxon.DateTime.fromSeconds(
        response.list[10].dt
      ).toLocaleString({
        month: "short",
        day: "2-digit",
      });
      $(".day2date").text("Date: " + getDate2);
      var futureTempCalc = response.list[10].main.temp * (9 / 5) - 459.67;
      $(".day2temp").text("Temp: " + futureTempCalc.toFixed(1) + "°F");
      $(".day2hum").text("Humidity: " + response.list[1].main.humidity + "%");
      var day2Slide = response.list[10].weather[0].icon;
      var getday2Image =
        "http://openweathermap.org/img/wn/" + day2Slide + "@2x.png";
      $("#day2image").attr("src", getday2Image);

      var getDate3 = luxon.DateTime.fromSeconds(
        response.list[18].dt
      ).toLocaleString({
        month: "short",
        day: "2-digit",
      });
      $(".day3date").text("Date: " + getDate3);
      var futureTempCalc = response.list[18].main.temp * (9 / 5) - 459.67;
      $(".day3temp").text("Temp: " + futureTempCalc.toFixed(1) + "°F");
      $(".day3hum").text("Humidity: " + response.list[18].main.humidity + "%");
      var day3Slide = response.list[18].weather[0].icon;
      var getday3Image =
        "http://openweathermap.org/img/wn/" + day3Slide + "@2x.png";
      $("#day3image").attr("src", getday3Image);

      var getDate4 = luxon.DateTime.fromSeconds(
        response.list[26].dt
      ).toLocaleString({
        month: "short",
        day: "2-digit",
      });
      $(".day4date").text("Date: " + getDate4);
      var futureTempCalc = response.list[26].main.temp * (9 / 5) - 459.67;
      $(".day4temp").text("Temp: " + futureTempCalc.toFixed(1) + "°F");
      $(".day4hum").text("Humidity: " + response.list[26].main.humidity + "%");
      var day4Slide = response.list[26].weather[0].icon;
      var getday4Image =
        "http://openweathermap.org/img/wn/" + day4Slide + "@2x.png";
      $("#day4image").attr("src", getday4Image);

      var getDate5 = luxon.DateTime.fromSeconds(
        response.list[34].dt
      ).toLocaleString({
        month: "short",
        day: "2-digit",
      });
      $(".day5date").text("Date: " + getDate5);
      var futureTempCalc = response.list[34].main.temp * (9 / 5) - 459.67;
      $(".day5temp").text("Temp: " + futureTempCalc.toFixed(1) + "°F");
      $(".day5hum").text("Humidity: " + response.list[34].main.humidity + "%");
      var day5Slide = response.list[34].weather[0].icon;
      var getday5Image =
        "http://openweathermap.org/img/wn/" + day5Slide + "@2x.png";
      $("#day5image").attr("src", getday5Image);
    });
  });

  $("#clearButton").on("click", function () {
    $("#cities-list").remove();
    console.log("click");
  });
});
