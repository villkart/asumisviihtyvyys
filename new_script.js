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
  let v = [];

  console.log(data);

  for (let i = 0; i < data.length; i++) {
    v = [];
    let muoto = [];

    try {
      for (let u = 0; u < data[i].geometry.coordinates[0].length; u++) {

        let m = [];
        piste = L.GeoJSON.coordsToLatLng(data[i].geometry.coordinates[0][u]);
        muoto.push(piste);
        m.push(muoto[u].lat, muoto[u].lng);
        //console.log(m);
        v.push(m);
      }

      L.polygon(
          v
      ).
          addTo(mymap).
          bindPopup(`${data[i].properties.name}`);

    } catch (e) {

      for (let e = 0; e < data[i].geometry.geometries.length; e++) {
        muoto = [];
        v = [];
        for (let u = 0; u <
        data[i].geometry.geometries[e].coordinates[0].length; u++) {
          let m = [];
          piste = L.GeoJSON.coordsToLatLng(
              data[i].geometry.geometries[e].coordinates[0][u]);
          muoto.push(piste);
          //console.log(muoto);
          //console.log(muoto[u].lng);
          m.push(muoto[u].lat, muoto[u].lng);
          //console.log(m);
          v.push(m);
        }

        L.polygon(
            v
        ).
            addTo(mymap).
            bindPopup(`${data[i].properties.name}`);

      }
    }



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

  let mymap = L.map('map').setView([65.130, 24.897], 5);
  L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets',
      }).addTo(mymap);


