import './general.js';

// Old fashioned JavaScript! Who needs classes anyway?
const LCC_COORDINATES = [44.0090, -123.0348];

// Generate the map
const map = L.map('map').setView(LCC_COORDINATES, 13);

// Set the tile layer for the map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Add the marker to the map
const marker = L.marker(LCC_COORDINATES).addTo(map);

// Bind a popup to the marker
marker.bindPopup(/*html*/`<h4>Lane Community College</h4><p>Free parking is available in the back</p>`).openPopup();
