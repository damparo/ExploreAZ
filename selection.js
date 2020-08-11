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

     google.maps.event.addListener(marker, "click", function(){
         window.location.href = "https://google.com";
     });


};

initMap();