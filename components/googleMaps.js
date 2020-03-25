var yourLocation;

function initMap(){
  yourLocation = {lat: lat, lng: long,};
  var map = new google.maps.Map(
    document.getElementById("map"),{
      zoom: 10,
      center: yourLocation,
    }
  );
  var marker = new google.maps.Marker({position: yourLocation, map: map })
}
