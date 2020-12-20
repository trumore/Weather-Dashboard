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
      var getDate1 = response.list[0].dt_txt;
      var showDate1 =
        getDate1.charAt(5) +
        getDate1.charAt(6) +
        "/" +
        getDate1.charAt(8) +
        getDate1.charAt(9);
      $("day1date").text("Date" + showDate1);
      var futureTempCalc = response.list[0].main.temp * (9 / 5) - 459.67;
      $(".day1temp").text("Temp: " + futureTempCalc.toFixed(1) + "°F");
      $(".day1hum").text("Humidity: " + response.list[0].main.humidity + "%");
      var day1Slide = response.list[0].weather[0].icon;
      var getday1Image =
        "http://openweathermap.org/img/wn/" + day1Slide + "@2x.png";
      $("#day1image").attr("src", getday1Image);

      var getDate2 = response.list[1].dt_txt;
      var showDate2 =
        getDate2.charAt(5) +
        getDate2.charAt(6) +
        "/" +
        getDate2.charAt(8) +
        getDate2.charAt(9);
      $("day2date").text("Date" + showDate2);
      var futureTempCalc = response.list[1].main.temp * (9 / 5) - 459.67;
      $(".day2temp").text("Temp: " + futureTempCalc.toFixed(1) + "°F");
      $(".day2hum").text("Humidity: " + response.list[1].main.humidity + "%");
      var day2Slide = response.list[1].weather[0].icon;
      var getday2Image =
        "http://openweathermap.org/img/wn/" + day2Slide + "@2x.png";
      $("#day2image").attr("src", getday2Image);

      var getDate3 = response.list[2].dt_txt;
      var showDate3 =
        getDate3.charAt(5) +
        getDate3.charAt(6) +
        "/" +
        getDate3.charAt(8) +
        getDate3.charAt(9);
      $("day3date").text("Date" + showDate3);
      var futureTempCalc = response.list[2].main.temp * (9 / 5) - 459.67;
      $(".day3temp").text("Temp: " + futureTempCalc.toFixed(1) + "°F");
      $(".day3hum").text("Humidity: " + response.list[2].main.humidity + "%");
      var day3Slide = response.list[2].weather[0].icon;
      var getday3Image =
        "http://openweathermap.org/img/wn/" + day3Slide + "@2x.png";
      $("#day3image").attr("src", getday3Image);

      var getDate4 = response.list[3].dt_txt;
      var showDate4 =
        getDate4.charAt(5) +
        getDate4.charAt(6) +
        "/" +
        getDate4.charAt(8) +
        getDate4.charAt(9);
      $("day4date").text("Date" + showDate4);
      var futureTempCalc = response.list[3].main.temp * (9 / 5) - 459.67;
      $(".day4temp").text("Temp: " + futureTempCalc.toFixed(1) + "°F");
      $(".day4hum").text("Humidity: " + response.list[3].main.humidity + "%");
      var day4Slide = response.list[3].weather[0].icon;
      var getday4Image =
        "http://openweathermap.org/img/wn/" + day4Slide + "@2x.png";
      $("#day4image").attr("src", getday4Image);

      var getDate5 = response.list[4].dt_txt;
      var showDate5 =
        getDate5.charAt(5) +
        getDate5.charAt(6) +
        "/" +
        getDate5.charAt(8) +
        getDate5.charAt(9);
      $("day5date").text("Date" + showDate4);
      var futureTempCalc = response.list[4].main.temp * (9 / 5) - 459.67;
      $(".day5temp").text("Temp: " + futureTempCalc.toFixed(1) + "°F");
      $(".day5hum").text("Humidity: " + response.list[4].main.humidity + "%");
      var day5Slide = response.list[4].weather[0].icon;
      var getday5Image =
        "http://openweathermap.org/img/wn/" + day5Slide + "@2x.png";
      $("#day5image").attr("src", getday5Image);
    });
  });
  //create var that links queryURL with API Key
  //get data attribute from search click event to link with a function
  //includes queryURL + "attr" + APIKey
});
