L.mapbox.accessToken = 'pk.eyJ1IjoiZGF2aWRqb2hubWlsbGVyIiwiYSI6ImNpbXFidWJzbTAwZm12N2trOTIxaTl3YXQifQ.JaRYbyll5SlOJ1WqY1G7GQ';
var map = L.mapbox.map('map', 'mapbox.streets');
var featureLayer = L.mapbox.featureLayer()
.loadURL('churches.geojson')
.on('ready', function() {
  map.fitBounds(featureLayer.getBounds());
  map.setMaxBounds(featureLayer.getBounds().pad(1));
  map.options.minZoom = map.getZoom();
  featureLayer.eachLayer(function(layer) {
    var content = '<a href="' + layer.feature.properties.url + '"><strong>' + layer.feature.properties.title + '</strong></a>'
    + '<br>' + layer.feature.properties.description;
    layer.bindPopup(content, {
      closeButton: false
    });
  })
.addTo(map)
});