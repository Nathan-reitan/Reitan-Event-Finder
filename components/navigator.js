var lat = 16.766588;
var long = -3.002562;

function successHandler(position){
  var crd = position.coords;
  lat = crd.latitude;
  long = crd.longitude;
  console.log("Your currrent position is:");
  console.log("Latitude: ", lat);
  console.log("Longitude: ", long);
  console.log("Within "+crd.accuracy+" meters.");
  initMap();
}


navigator.geolocation.getCurrentPosition(successHandler);
