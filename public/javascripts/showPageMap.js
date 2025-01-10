mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: 'map',   // Div ID to display the map
  style: 'mapbox://styles/mapbox/streets-v11', // Map style
  center: [-122.3321, 47.6062], // Longitude, Latitude (example for Seattle)
  zoom: 10
});
