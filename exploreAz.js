$(document).ready(function(){
  $('.sidenav').sidenav();
});

$(document).ready(function(){
    $('.carousel').carousel({
        fullWidth: true,
        indicators: true,
    
    })
  });



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
    var image = response1.weather[0].icon;
    var wIcon = "https://openweathermap.org/img/w/" + image + ".png";

    $("#destWeather").append(
      $("<img>").attr("src", wIcon)
      
    );
    
    $("#destTemp").text(temp + "°F")
    ;






  });





