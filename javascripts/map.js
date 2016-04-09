L.mapbox.accessToken = 'pk.eyJ1IjoiZGF2aWRqb2hubWlsbGVyIiwiYSI6ImNpbXFidWJzbTAwZm12N2trOTIxaTl3YXQifQ.JaRYbyll5SlOJ1WqY1G7GQ';
// 1deg around -21.14121, 149.185625
var southWest = L.latLng(-22.14121, 148.185625),
    northEast = L.latLng(-20.14121, 150.185625),
    bounds = L.latLngBounds(southWest, northEast);
var map = L.mapbox.map('map', 'mapbox.streets', {
  maxBounds: bounds,
  minZoom: 10
});
var featureLayer = L.mapbox.featureLayer()
.loadURL('churches.geojson')
.on('ready', function() {
  map.fitBounds(featureLayer.getBounds());
  featureLayer.eachLayer(function(layer) {
  var content = '<strong>' + layer.feature.properties.title + '</strong>'
  + '<br>' + layer.feature.properties.description + '<br>'
  + '<a href="' + layer.feature.properties.url + '">View details</a>';
  layer.bindPopup(content, {
    closeButton: false
  });
})
.addTo(map)
});