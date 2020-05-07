$(document).ready(function(){
    $('.carousel').carousel({
        fullWidth: true,
        indicators: true,
       
       

    })
  });

// weather information - single day

  var city = "flagstaff"
  var apiKey = "9f3310b38a0b78b3d966eb1da9d1599e";
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=" +
    apiKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response1) {
    console.log(queryURL);
    console.log(response1);

    var temp = response1.main.temp;
    var humid = response1.main.humidity;
    var wind = response1.wind.speed;
    // var uvlon = response1.coord.lon;
    // var uvlat = response1.coord.lat;
    var image = response1.weather[0].icon;
    var wIcon = "https://openweathermap.org/img/w/" + image + ".png";
    // var uv = $("#weatherdetails");
    // console.log(uvlat);


    $("#destWeather").append(
      $("<p>").text("Current Weather in Twin Arrows:"),
      $("<img>").attr("src", wIcon),
      $("<p>").text("Temperature (F): " + temp),
      $("<p>").text("Humidity: " + humid + " %"),
      $("<p>").text("Wind Speed: " + wind + " MPH"),
      // $("<h3>").text(city),
      // $("<p>").moment().subtract(10, 'days').calendar(),
      // $("#weatherdetails0").empty(),
    );



    // $("#destWeather1").append(
    //   $("<p>").text("Temperature (F): " + temp),
    //   $("<p>").text("Humidity: " + humid + " %"),
    //   $("<p>").text("Wind Speed: " + wind + " MPH"),
    //   $("#destWeather1").empty()
    // );

    // var uvqueryURL =
    //   "https://api.openweathermap.org/data/2.5/uvi?appid=" +
    //   apiKey +
    //   "&lat=" +
    //   uvlat +
    //   "&lon=" +
    //   uvlon;
    // console.log(uvqueryURL);

    // $.ajax({
    //   url: uvqueryURL,
    //   method: "GET"
    // }).then(function(response2) {
    //   console.log(response2.value);

    //   $("#destWeather1").append(
    //     $("<p>").text("UV Index: " + response2.value)
    //   );
    // });
  });





