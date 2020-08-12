function initMap () {

    var location = {
        lat: 33.9,
        lng: -112.2       
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
         zoom: 6.9, 
         center: location,

         mapTypeControl: true,
         mapTypeControlOptions: {
           style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
           position: google.maps.ControlPosition.TOP_CENTER
         },
         zoomControl: true,
         zoomControlOptions: {
           position: google.maps.ControlPosition.LEFT_CENTER
         },
         scaleControl: true,
         streetViewControl: true,
         streetViewControlOptions: {
           position: google.maps.ControlPosition.LEFT_TOP
         },
         fullscreenControl: true

     });


    //  var uri1 = new System.Uri("C:\Users\19283\Empire\ExploreAZ\bisbee.html");
    // var converted = uri1.AbsoluteUri;

     var marker1 = new google.maps.Marker({
         position: chiri,
         url: "https://damparo.github.io/ExploreAZ/chiri.html",
         map: map
     });
     var marker2 = new google.maps.Marker({
         position: fossilCreek,
         url: "https://damparo.github.io/ExploreAZ/fossilCreek.html",
         map: map

     });
     var marker3 = new google.maps.Marker({
         position: twinArrows,
         url: "https://damparo.github.io/ExploreAZ/twinArrows.html",
         map: map

     });
     var marker4 = new google.maps.Marker({
         position: bisbee,
         url: "https://damparo.github.io/ExploreAZ/bisbee.html",
         map: map

     });

     google.maps.event.addListener(marker1, "click", function(){
         window.location.href = marker1.url;
     });
     google.maps.event.addListener(marker2, "click", function(){
        window.location.href = marker2.url;
    }); google.maps.event.addListener(marker3, "click", function(){
        window.location.href = marker3.url;
    }); google.maps.event.addListener(marker4, "click", function(){
        window.location.href = marker4.url;
    });
     
  


};

initMap();