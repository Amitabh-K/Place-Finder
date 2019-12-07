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

  








}