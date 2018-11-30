'use strict';
const aside = document.querySelector('aside');
//let json = require('kuntarajat-ok.geojsonjson'); //(with path)
//let json = $.getJSON("kuntarajat-ok.json");
//let data = eval("(" +json.responseText + ")");

function readJSON(path) {
  fetch(path).then(function(vastaus) {
    return vastaus.json();
  }).then(function(json) {
    console.log(json.features);
    let d = json.features;
    return d;
  }).catch(function(error) {
    console.log(error);
  });
}

let data = readJSON('kuntarajat-ok.json');
console.log(data);

function tausta() {
  if (document.getElementById('nappi1').checked === true) {
    aside.setAttribute('style', 'background-color: blue;');
  }
  else {
    aside.setAttribute('style', 'background-color: lightblue;');
  }
}

let mymap = L.map('map').setView([60.230, 24.897], 13);
L.tileLayer(
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
    {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox.streets',
    }).addTo(mymap);
L.marker([60.230, 24.897]).
    addTo(mymap).
    bindPopup('<b>Hello world!</b><br />I am a popup.').
    openPopup();
L.circle([64.230, 28.897], 50000,
    {color: 'red', fillColor: '#f03', fillOpacity: 0.2}).
    addTo(mymap).
    bindPopup('I am a circle.');
L.polygon(
    [[60.509, -0.08], [63.509, -0.06], [51.51, -13.047], [70.51, -13.047]]).
    addTo(mymap).
    bindPopup('I am a polygon.');
let popup = L.popup();

function onMapClick(e) {

  popup.setLatLng(e.latlng).
      setContent('You clicked the map at ' + e.latlng.toString()).
      openOn(mymap);

  L.circle(5000,
      {radius: 1000, color: 'red', fillColor: '#f03', fillOpacity: 0.2}).
      setLatLng(e.latlng).
      addTo(mymap).
      bindPopup('umpura');

}

mymap.on('click', onMapClick);

//for(let i=0;i<data.features;i++){
//console.log(data.features[i]);
//}

console.log(data[3].coordinates[1]);
