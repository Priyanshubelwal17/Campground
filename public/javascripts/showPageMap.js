const campground = require("../../models/campground");

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: 'map',   // Div ID to display the map
  style: 'mapbox://styles/mapbox/streets-v11', // Map style
  center: campground.geometry.coordinates, // Longitude, Latitude (example for Seattle)
  zoom: 10
});


new mapboxgl.Marker()
    .setLngLat([campground.geometry.coordinates])
    .addTo(map)
