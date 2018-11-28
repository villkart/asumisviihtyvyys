
'use strict';
const aside = document.querySelector('aside');

function tausta() {
  if (document.getElementById("nappi1").checked === true) {
    aside.setAttribute('style', 'background-color: blue;');
  }
  else{
    aside.setAttribute('style', 'background-color: lightblue;');
  }
}



let kartta = L.map('map').setView([60.230, 24.897], 10);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 13,

  id: 'mapbox.streets'
}).addTo(kartta);
