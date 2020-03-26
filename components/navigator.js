var lat = 16.766588;
var long = -3.002562;
var latlong;

function successHandler(position){
  var crd = position.coords;
  lat = crd.latitude;
  long = crd.longitude;
  latlong = lat + "," + long;
  instantiateTicket(latlong);
}


navigator.geolocation.getCurrentPosition(successHandler);
