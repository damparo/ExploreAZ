$(document).ready(function(){
    $('.sidenav').sidenav();
  });
        
$(document).ready(function(){
    $('.parallax').parallax();
  });
        


  var images = ["IMG_3187.jpg", "IMG_4362.jpg", "IMG_4874.jpg"];

  var randomPic = "./assets/css/Background/" + images[Math.floor(Math.random() * images.length)];
  
  console.log(randomPic);
 
 
 function mobileBackground () {
 
     return [
         $("#randomPic").is(":visible"),
         $("body").css({
             "background-image": "url(" + randomPic + ")",
             "background-position": "center center",
             "background-repeat": "no-repeat",
             "background-attachment": "fixed",
             "background-size": "cover",
             "background-color": "#464646",
         })]
     
 
 }
 
 mobileBackground();
 

 function initMap () {

    var location = {
        lat: 34.3,
        lng: -112.0937       
     };

     var chiri = {
         lat: 32.0136,
         lng: -109.3423
     };
     var fossilCreek = {
         lat: 34.4210,
         lng: -111.576
     };
     var twinArrows = {
         lat: 35.1611,
         lng: -111.2793
     };
     var bisbee = {
         lat: 31.4482,
         lng: -109.9284
     };



     var map = new google.maps.Map(document.getElementById("map"), {
         zoom: 7, 
         center: location
     });


     var marker1 = new google.maps.Marker({
         position: chiri,
         map: map
     });
     var marker2 = new google.maps.Marker({
         position: fossilCreek,
         map: map

     });
     var marker3 = new google.maps.Marker({
         position: twinArrows,
         map: map

     });
     var marker4 = new google.maps.Marker({
         position: bisbee,
         map: map

     });
};

initMap();

// async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9ZlLxFonvHiDxEfNm1wua4_87JsjHLOY&callback=initMap"