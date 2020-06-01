var yourLocation;
var contentStringArr=[];
var infoWindowArr=[];

function initMap(latlong, json){
  yourLocation = {lat: lat, lng: long,};
  var map = new google.maps.Map(
    document.getElementById("map"),{
      zoom: 10,
      center: yourLocation,
    });
  for (var i = 0; i<20; i++) {
    var infoWindow = new google.maps.InfoWindow();
    infoWindowArr.push(infoWindow);
    var contentString = {
                    location: json._embedded.events[i]._embedded.venues[0].name,
                    name: json._embedded.events[i].name,
                    latlong: json._embedded.events[i]._embedded.venues[0].location.latitude+json._embedded.events[i]._embedded.venues[0].location.longitude,
    };
    contentStringArr.push(contentString);
    addMarker(map, json._embedded.events[i]);
  }
  var yourMarker = new google.maps.Marker({position: yourLocation, map: map});
}

function addMarker(map, event){
 var marker = new google.maps.Marker({
    position: new google.maps.LatLng(event._embedded.venues[0].location.latitude, event._embedded.venues[0].location.longitude),
    latlong: event._embedded.venues[0].location.latitude+event._embedded.venues[0].location.longitude,
    map: map,
  });
  marker.addListener("click", function () {
    for (var i=0; i<20; i++){
      if (contentStringArr[i].latlong===marker.latlong){
        infoWindowArr[i].setContent("<div>"+"<h6>"+contentStringArr[i].name+"</h6>"+"</div>"+"<br>"+
        "<p>"+contentStringArr[i].location+"</p>")
        infoWindowArr[i].close();
        infoWindowArr[i].open(map, marker);
      }
    }
  })
  marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
}
