var lat = 33.426971;
var long = -117.611992;
var latlong;

function successHandler(position){
  var crd = position.coords;
  lat = crd.latitude;
  long = crd.longitude;
  latlong = lat + "," + long;
  instantiateTicket(latlong);
}


navigator.geolocation.getCurrentPosition(successHandler);
