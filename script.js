'use strict';
const aside = document.querySelector('aside');
let footer = document.querySelector('footer');
//let json = require('kuntarajat-ok.geojsonjson'); //(with path)
//let json = $.getJSON("kuntarajat-ok.json");
//let data = eval("(" +json.responseText + ")");

function readJSON(path, settings = null) {
  console.log(settings);
  fetch(path, settings).then(function(vastaus) {
    return vastaus.json();
  }).then(function(json) {
    //console.log(json.features);
    if (json.features != null) {
      const d = json.features;
      valmis1(d);
    }
    else if (json.variables != null) {
      //console.log(json.variables);
      const d = json.variables;
      valmis2(d);
    }
  }).catch(function(error) {
    console.log(error);
  });
}

const data1 = readJSON('kuntarajat-ok.json');

const data = {
  'query': [
    {
      'code': 'Alue 2018',
      'selection': {'filter': 'item', 'values': ['SSS']},
    }], 'response': {'format': 'json'},
};

const asetukset = {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  mode: 'no-cors', // no-cors, cors, *same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    // "Content-Type": "application/x-www-form-urlencoded",
  },
  redirect: 'follow', // manual, *follow, error
  referrer: 'no-referrer', // no-referrer, *client
  body: JSON.stringify(data), // body data type must match "Content-Type" header
};

const data2 = readJSON(
    'https://pxnet2.stat.fi/PXWeb/api/v1/fi/Kuntien_avainluvut/2018/kuntien_avainluvut_2018_viimeisin.px',
    asetukset);

function valmis1(data1) {
  let piste = [];

  let v = [];
  //piste += L.GeoJSON.coordsToLatLng(data[0].geometry.coordinates[0][0]);
  //console.log(piste);
  console.log(data1);
  //console.log(`${data[0].geometry.coordinates[0][0]}`);
  for (let i = 0; i < data1.length; i++) {
    v = [];
    let muoto = [];
    //console.log(piste);
    try {
      for (let u = 0; u < data1[i].geometry.coordinates[0].length; u++) {

        let m = [];
        piste = L.GeoJSON.coordsToLatLng(data1[i].geometry.coordinates[0][u]);
        muoto.push(piste);
        m.push(muoto[u].lat, muoto[u].lng);
        //console.log(m);
        v.push(m);
      }

      L.polygon(
          v,
      ).
          addTo(mymap).
          bindPopup(`${data1[i].properties.name}`);

    } catch (e) {

      for (let e = 0; e < data1[i].geometry.geometries.length; e++) {
        muoto = [];
        v = [];
        for (let u = 0; u <
        data1[i].geometry.geometries[e].coordinates[0].length; u++) {
          let m = [];
          piste = L.GeoJSON.coordsToLatLng(
              data1[i].geometry.geometries[e].coordinates[0][u]);
          muoto.push(piste);
          //console.log(muoto);
          //console.log(muoto[u].lng);
          m.push(muoto[u].lat, muoto[u].lng);
          //console.log(m);
          v.push(m);
        }

        L.polygon(
            v,
        ).
            addTo(mymap).
            bindPopup(`${data1[i].properties.name}`);

      }
    }

  }
}

function valmis2(data2) {
  console.log(data2);

  console.log(
      `${data2[0].valueTexts[17]}, ${data2[0].values[17].value}, ${data2[1].valueTexts[17]}: ${data2[1].values[17]}`);
  console.log(
      `${data2[0].valueTexts[17]}, ${data2[0].values[17]}, ${data2[1].valueTexts[17]}: ${data2[1].values[17]['012']}`);
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

