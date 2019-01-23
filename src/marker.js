const mapboxgl = require('mapbox-gl');

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png',
};

const buildMarker = function(type, coords) {
  let iconURL = '';
  if (type === 'hotel') {
    iconURL = iconURLs.hotels;
  }

  if (type === 'restaurant') {
    iconURL = iconURLs.restaurants;
  }

  if (type === 'activity') {
    iconURL = iconURLs.activities;
  }

  return { iconURL, coords };
};

module.exports = buildMarker;
