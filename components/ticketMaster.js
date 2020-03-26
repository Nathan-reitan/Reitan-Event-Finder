var tbody = document.getElementById("table");

class Ticketmaster{
  constructor(latlong){
    this.latlong=latlong;
    this.getEvents=this.getEvents.bind(this);
  }
  getEvents(){
    $.ajax({
    type: "GET",
      url: "https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=uPhG93gkA9zk83eAg0Q2AvsIbEOSrASU&radius=30&latlong="+this.latlong,
    dataType: "json",
    success: function (json) {
      for (var i = 0; i < json._embedded.events.length; i++){
        var row = document.createElement("tr");
        var eventName = document.createElement("td");
        eventName.textContent = json._embedded.events[i].name;
        var eventVenue = document.createElement("td");
        eventVenue.textContent = json._embedded.events[i]._embedded.venues[0].name;
        var eventCity = document.createElement("td");
        eventCity.textContent = json._embedded.events[i]._embedded.venues[0].city.name
        row.appendChild(eventName);
        row.appendChild(eventVenue);
        row.appendChild(eventCity);
        tbody.appendChild(row);
      }
      initMap(latlong, json);
    },
      error: function (xhr, status, err) {
      }
    })
  }
}
