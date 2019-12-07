var map, infowindow;

function createMap () {
  var options = {
    center: { lat: 43.557930, lng: -79.707533 },
    zoom: 10,
    
  };
  map = new google.maps.Map(document.getElementById('map'), options);


  var input = document.getElementById('search');
  var searchBox = new google.maps.places.SearchBox(input);

// to ensure set bounds to search box
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  
  var markers = [];
  // if user selects prediction from list

  searchBox.addListener('places_changed', function () {
    var places = searchBox.getPlaces();

    if (places.length == 0)
      return;

      // getting rod of map
    markers.forEach(function (m) { m.setMap(null); });
    markers = [];

   
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(p) {
      if (!p.geometry)
        return;

      markers.push(new google.maps.Marker({
        map: map,
        title: p.name,
        position: p.geometry.location
      }));

      if (p.geometry.viewport)
        bounds.union(p.geometry.viewport);
      else
        bounds.extend(p.geometry.location);
    });
    
    map.fitBounds(bounds);
  });
}  
