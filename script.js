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
 