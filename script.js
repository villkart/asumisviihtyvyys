'use strict';
const aside = document.querySelector('aside');
let footer = document.querySelector('footer');
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




function valmis(data) {
  let piste = [];
  let muoto = [];
  let v = [];
  //piste += L.GeoJSON.coordsToLatLng(data[0].geometry.coordinates[0][0]);
  //console.log(piste);
console.log(data);
  //console.log(`${data[0].geometry.coordinates[0][0]}`);
  for (let i = 0; i < data.length; i++) {
    v = [];
    //console.log(piste);
try{
    for (let u = 0; u < data[i].geometry.coordinates[0].length; u++) {
      //console.log(piste);
      let m = [];
      piste = L.GeoJSON.coordsToLatLng(data[i].geometry.coordinates[0][u]);
      muoto.push(piste);
      //console.log(muoto);
      //console.log(muoto[u].lng);
      m.push(muoto[u].lat, muoto[u].lng);
      //console.log(m);
      v.push(m);

    //console.log(data[7].geometry.geometries[0].length);

    //console.log(`${data[i].geometry.coordinates}`);
    //console.log(data[0].properties.name);
    console.log(v);
    //console.log(data[i].geometry.coordinates[0][0].length);
    L.polygon(
        v
    ).
        addTo(mymap).
        bindPopup(`${data[0].geometry.name}`);
    }}catch(e){console.log('saatana')}
  }
}

/*function tausta() {
  if (document.getElementById('nappi1').checked === true) {
    aside.setAttribute('style', 'background-color: blue;');
  }
  else {
    aside.setAttribute('style', 'background-color: lightblue;');
  }
}
*/

let mymap = L.map('map').setView([60.230, 24.897], 7);
L.tileLayer(
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
    {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox.streets',
    }).addTo(mymap);
/*L.marker([60.230, 24.897]).
    addTo(mymap).
    bindPopup('<b>Hello world!</b><br />I am a popup.').
    openPopup();*/
L.circle([0, 0], 50000,
    {color: 'red', fillColor: '#f03', fillOpacity: 0.2}).
    addTo(mymap).
    bindPopup('I am a circle.');

L.polygon(
    [
      [60.50921423, -0.08153425],
      [63.5091324, -0.0654352],
      [51.51342654, -13.04732534],
      [70.51325, -13.0472345]]).
    addTo(mymap).
    bindPopup('I am a polygon.');



/*function onMapClick(e) {

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
*/
//for(let i=0;i<data.features;i++){
//console.log(data.features[i]);
//}

//
//features.geometry.coordinates
