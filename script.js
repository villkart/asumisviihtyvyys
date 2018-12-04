'use strict';
const aside = document.querySelector('aside');
//let json = require('kuntarajat-ok.geojsonjson'); //(with path)
//let json = $.getJSON("kuntarajat-ok.json");
//let data = eval("(" +json.responseText + ")");

function readJSON(path) {
  fetch(path).then(function(vastaus) {
    return vastaus.json();
  }).then(function(json) {
    //console.log(json.features);
    const d = json.features;
    valmis(d);
  }).catch(function(error) {
    console.log(error);
  });
}

const data = readJSON('kuntarajat-ok.json');

/*function valmis(data) {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].geometry.coordinates);
    L.polygon(
        data[i].geometry.coordinates[0]).
        addTo(mymap).
        bindPopup('I am a polygon.');

  }
}

/*for(let i=0;i<data.length;i++) {
  console.log(data[i].geometry.coordinates[0]);

  L.polygon(
      data[i].geometry.coordinates[0]).
      addTo(mymap).
      bindPopup('I am a polygon.');

}

*/
function valmis(data) {
  console.log(data);
  /*for (let i = 0; i < data.length; i++) {*/
  //console.log(data[i].geometry.coordinates);
  console.log(data[0].properties.name);
  L.polygon(
      [
        [24.300937, 62.988353],
        [24.258583, 62.985745],
        [24.231917, 62.989979],
        [24.228591, 62.998683],
        [24.226231, 63.004854],
        [24.180448, 63.007547],
        [24.182296, 63.013274],
        [24.165745, 63.010051],
        [24.163162, 63.006672],
        [24.177928, 62.987693],
        [24.144746, 62.984487],
        [24.128303, 62.982895],
        [24.102791, 62.98317],
        [24.093976, 62.979258],
        [24.092853, 62.963552],
        [24.070067, 62.971906],
        [24.041196, 62.973557],
        [24.02894, 62.971858],
        [24.001129, 62.89359],
        [23.991964, 62.860919],
        [24.096787, 62.846218],
        [24.134898, 62.846456],
        [24.143433, 62.831217],
        [24.09895, 62.828233],
        [24.080291, 62.809653],
        [24.076923, 62.801319],
        [24.073408, 62.792618],
        [24.059519, 62.785995],
        [24.049649, 62.778609],
        [24.04366, 62.774125],
        [24.031136, 62.740863],
        [24.039521, 62.736484],
        [24.012158, 62.730083],
        [24.000235, 62.741833],
        [23.998093, 62.749418],
        [23.997196, 62.757448],
        [23.983844, 62.764028],
        [23.974748, 62.761429],
        [23.97006, 62.753148],
        [23.931594, 62.750926],
        [23.877456, 62.757783],
        [23.863225, 62.760376],
        [23.847049, 62.762606],
        [23.700236, 62.827208],
        [23.633732, 62.879598],
        [23.571487, 62.907054],
        [23.560851, 62.910574],
        [23.547864, 62.914869],
        [23.533755, 62.917235],
        [23.519471, 62.919628],
        [23.457912, 62.959764],
        [23.493351, 62.967798],
        [23.49958, 62.970759],
        [23.500769, 62.979037],
        [23.577185, 62.999953],
        [23.577861, 63.01561],
        [23.642657, 63.044104],
        [23.653482, 63.045127],
        [23.637118, 63.067151],
        [23.645994, 63.08776],
        [23.679656, 63.087411],
        [23.684061, 63.098456],
        [23.703397, 63.097418],
        [23.715638, 63.111901],
        [23.737233, 63.110503],
        [23.724387, 63.095663],
        [23.750387, 63.075485],
        [23.866122, 63.112899],
        [23.885655, 63.112539],
        [23.893058, 63.103955],
        [23.936906, 63.110381],
        [24.070273, 63.146784],
        [24.087486, 63.136217],
        [24.10009, 63.141073],
        [24.126844, 63.151374],
        [24.146778, 63.153342],
        [24.164172, 63.146576],
        [24.170771, 63.147998],
        [24.20318, 63.154869],
        [24.256886, 63.133017],
        [24.304408, 63.141116],
        [24.359008, 63.11643],
        [24.317976, 63.06664],
        [24.278017, 63.064375],
        [24.272054, 63.048263],
        [24.278085, 63.033059],
        [24.293551, 63.03628],
        [24.2969, 63.034642],
        [24.308597, 63.018485],
        [24.29575, 63.017122],
        [24.289517, 62.999055],
        [24.300937, 62.988353]],
  ).
      addTo(mymap).
      bindPopup(`${data[0].geometry.name}`);

  //}
}

/*[
  [24.300937, 62.988353],
  [24.258583, 62.985745],
  [24.231917, 62.989979],
  [24.228591, 62.998683],
  [24.226231, 63.004854],
  [24.180448, 63.007547],
  [24.182296, 63.013274],
  [24.165745, 63.010051],
  [24.163162, 63.006672],
  [24.177928, 62.987693],
  [24.144746, 62.984487],
  [24.128303, 62.982895],
  [24.102791, 62.98317],
  [24.093976, 62.979258],
  [24.092853, 62.963552],
  [24.070067, 62.971906],
  [24.041196, 62.973557],
  [24.02894, 62.971858],
  [24.001129, 62.89359],
  [23.991964, 62.860919],
  [24.096787, 62.846218],
  [24.134898, 62.846456],
  [24.143433, 62.831217],
  [24.09895, 62.828233],
  [24.080291, 62.809653],
  [24.076923, 62.801319],
  [24.073408, 62.792618],
  [24.059519, 62.785995],
  [24.049649, 62.778609],
  [24.04366, 62.774125],
  [24.031136, 62.740863],
  [24.039521, 62.736484],
  [24.012158, 62.730083],
  [24.000235, 62.741833],
  [23.998093, 62.749418],
  [23.997196, 62.757448],
  [23.983844, 62.764028],
  [23.974748, 62.761429],
  [23.97006, 62.753148],
  [23.931594, 62.750926],
  [23.877456, 62.757783],
  [23.863225, 62.760376],
  [23.847049, 62.762606],
  [23.700236, 62.827208],
  [23.633732, 62.879598],
  [23.571487, 62.907054],
  [23.560851, 62.910574],
  [23.547864, 62.914869],
  [23.533755, 62.917235],
  [23.519471, 62.919628],
  [23.457912, 62.959764],
  [23.493351, 62.967798],
  [23.49958, 62.970759],
  [23.500769, 62.979037],
  [23.577185, 62.999953],
  [23.577861, 63.01561],
  [23.642657, 63.044104],
  [23.653482, 63.045127],
  [23.637118, 63.067151],
  [23.645994, 63.08776],
  [23.679656, 63.087411],
  [23.684061, 63.098456],
  [23.703397, 63.097418],
  [23.715638, 63.111901],
  [23.737233, 63.110503],
  [23.724387, 63.095663],
  [23.750387, 63.075485],
  [23.866122, 63.112899],
  [23.885655, 63.112539],
  [23.893058, 63.103955],
  [23.936906, 63.110381],
  [24.070273, 63.146784],
  [24.087486, 63.136217],
  [24.10009, 63.141073],
  [24.126844, 63.151374],
  [24.146778, 63.153342],
  [24.164172, 63.146576],
  [24.170771, 63.147998],
  [24.20318, 63.154869],
  [24.256886, 63.133017],
  [24.304408, 63.141116],
  [24.359008, 63.11643],
  [24.317976, 63.06664],
  [24.278017, 63.064375],
  [24.272054, 63.048263],
  [24.278085, 63.033059],
  [24.293551, 63.03628],
  [24.2969, 63.034642],
  [24.308597, 63.018485],
  [24.29575, 63.017122],
  [24.289517, 62.999055],
  [24.300937, 62.988353]];
*/
function tausta() {
  if (document.getElementById('nappi1').checked === true) {
    aside.setAttribute('style', 'background-color: blue;');
  }
  else {
    aside.setAttribute('style', 'background-color: lightblue;');
  }
}

let mymap = L.map('map').setView([60.230, 24.897], 5);
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

//
//features.geometry.coordinates
