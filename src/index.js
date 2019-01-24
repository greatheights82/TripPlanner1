console.log('Hello from JavaScript');

const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

// console.og;
const marker = new buildMarker('hotels', [-87.6354, 41.8885]);

mapboxgl.accessToken =
  'pk.eyJ1Ijoia3lsZWNybGVlOTUiLCJhIjoiY2pyOW9kbjg3MGQ0cDQzcWtoYXVtYnRlZCJ9.-X3wa67Br8At-XQ7hyMHhw';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // use [-87.6354, 41.8885] for Chicago
  zoom: 15, // starting zoom
  style: `mapbox://styles/mapbox/dark-v10`, // mapbox has lots of different map styles available.
});

marker.addTo(map);

// const marker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
// marker.addTo(map);
