L.mapbox.accessToken = 'pk.eyJ1IjoiZGF2aWRqb2hubWlsbGVyIiwiYSI6ImNpbXFidWJzbTAwZm12N2trOTIxaTl3YXQifQ.JaRYbyll5SlOJ1WqY1G7GQ';
var featureLayer = L.mapbox.featureLayer()
.loadURL('churches.geojson')
.on('ready', function() {
  featureLayer.eachLayer(function(layer) {
  var content = '<strong>' + layer.feature.properties.title + '</strong>'
  + '<br>' + layer.feature.properties.description + '<br>'
  + '<a href="' + layer.feature.properties.url + '">View details</a>';
  layer.bindPopup(content, {
    closeButton: false
  });
})
});
var bounds = featureLayer.getBounds();
var map = L.mapbox.map('map', 'mapbox.streets', {
featureLayer: featureLayer,
maxBounds: bounds,
minZoom: 10
});
map.fitBounds(bounds);