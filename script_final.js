'use strict';

const haku = document.querySelector('#hakupalkki');
const vastaus = document.querySelector('#vastaus');

let footer = document.querySelector('footer');

function readJSON(path) {
  fetch(path).then(function(vastaus) {
    return vastaus.json();
  }).then(function(json) {
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
  const data_1 = {
    'query': [
      {
        'code': 'Alue 2018',
        'selection': {
          'filter': 'item',
          'values': [

            '020',
            '005',
            '009',
            '010',
            '016',
            '018',
            '019',
            '035',
            '043',
            '046',
            '047',
            '049',
            '050',
            '051',
            '052',
            '060',
            '061',
            '062',
            '065',
            '069',
            '071',
            '072',
            '074',
            '075',
            '076',
            '077',
            '078',
            '079',
            '081',
            '082',
            '086',
            '111',
            '090',
            '091',
            '097',
            '098',
            '099',
            '102',
            '103',
            '105',
            '106',
            '108',
            '109',
            '139',
            '140',
            '142',
            '143',
            '145',
            '146',
            '153',
            '148',
            '149',
            '151',
            '152',
            '165',
            '167',
            '169',
            '170',
            '171',
            '172',
            '176',
            '177',
            '178',
            '179',
            '181',
            '182',
            '186',
            '202',
            '204',
            '205',
            '208',
            '211',
            '213',
            '214',
            '216',
            '217',
            '218',
            '224',
            '226',
            '230',
            '231',
            '232',
            '233',
            '235',
            '236',
            '239',
            '240',
            '320',
            '241',
            '322',
            '244',
            '245',
            '249',
            '250',
            '256',
            '257',
            '260',
            '261',
            '263',
            '265',
            '271',
            '272',
            '273',
            '275',
            '276',
            '280',
            '284',
            '285',
            '286',
            '287',
            '288',
            '290',
            '291',
            '295',
            '297',
            '300',
            '301',
            '304',
            '305',
            '312',
            '316',
            '317',
            '318',
            '398',
            '399',
            '400',
            '407',
            '402',
            '403',
            '405',
            '408',
            '410',
            '416',
            '417',
            '418',
            '420',
            '421',
            '422',
            '423',
            '425',
            '426',
            '444',
            '430',
            '433',
            '434',
            '435',
            '436',
            '438',
            '440',
            '441',
            '475',
            '478',
            '480',
            '481',
            '483',
            '484',
            '489',
            '491',
            '494',
            '495',
            '498',
            '499',
            '500',
            '503',
            '504',
            '505',
            '508',
            '507',
            '529',
            '531',
            '535',
            '536',
            '538',
            '541',
            '543',
            '545',
            '560',
            '561',
            '562',
            '563',
            '564',
            '309',
            '576',
            '577',
            '578',
            '445',
            '580',
            '581',
            '599',
            '583',
            '854',
            '584',
            '588',
            '592',
            '593',
            '595',
            '598',
            '601',
            '604',
            '607',
            '608',
            '609',
            '611',
            '638',
            '614',
            '615',
            '616',
            '619',
            '620',
            '623',
            '624',
            '625',
            '626',
            '630',
            '631',
            '635',
            '636',
            '678',
            '710',
            '680',
            '681',
            '683',
            '684',
            '686',
            '687',
            '689',
            '691',
            '694',
            '697',
            '698',
            '700',
            '702',
            '704',
            '707',
            '729',
            '732',
            '734',
            '736',
            '790',
            '738',
            '739',
            '740',
            '742',
            '743',
            '746',
            '747',
            '748',
            '791',
            '749',
            '751',
            '753',
            '755',
            '758',
            '759',
            '761',
            '762',
            '765',
            '766',
            '768',
            '771',
            '777',
            '778',
            '781',
            '783',
            '831',
            '832',
            '833',
            '834',
            '837',
            '844',
            '845',
            '846',
            '848',
            '849',
            '850',
            '851',
            '853',
            '857',
            '858',
            '859',
            '886',
            '887',
            '889',
            '890',
            '892',
            '893',
            '895',
            '785',
            '905',
            '908',
            '911',
            '092',
            '915',
            '918',
            '921',
            '922',
            '924',
            '925',
            '927',
            '931',
            '934',
            '935',
            '936',
            '941',
            '946',
            '976',
            '977',
            '980',
            '981',
            '989',
            '992',
          ],
        },
      },
      {
        'code': 'Tiedot',
        'selection': {
          'filter': 'item',
          'values': [

            'M411',
            'M476',
            'M297',
            'M486',
            'M162',
            'M78',
            'M485',
          ],
        },
      }], 'response': {'format': 'json'},
  };
  const asetukset = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    body: JSON.stringify(data_1), // body data type must match "Content-Type" header
  };

  for (let i = 0; i < data.length; i++) {
    v = [];
    let muoto = [];

    try {
      for (let u = 0; u < data[i].geometry.coordinates[0].length; u++) {

        let m = [];
        piste = L.GeoJSON.coordsToLatLng(data[i].geometry.coordinates[0][u]);
        muoto.push(piste);
        m.push(muoto[u].lat, muoto[u].lng);
        v.push(m);
      }


      let poly = L.polygon(
          v
      )
      poly.addTo(mymap).
          //  bindPopup(`${data[i].properties.name}`);
          bindPopup(function() {
            let nimi = data[i].properties.name;
            const path = 'https://pxnet2.stat.fi:443/PXWeb/api/v1/fi/Kuntien_avainluvut/2018/kuntien_avainluvut_2018_viimeisin.px';
            let kunta_code;
            let kunta_id;
            let asukasluku;
            let muutto;
            let vakimuutos;
            let koulutus;
            let tyottomyys;
            let elakelaiset;
            let huoltosuhde;

            fetch(path).then(function(vastaus) {
              return vastaus.json();
            }).then(function(json) {
              kunta_id = +(json.variables[0].valueTexts.indexOf(nimi));
              kunta_code = json.variables[0].values[kunta_id];
              console.log(kunta_id);
            }).then(fetch(path, asetukset).then(function(vastaus) {
              return vastaus.json();
            }).then(function(json) {
              let i_asukasluku = kunta_id * 7 - 7;
              let i_vakimuutos = kunta_id * 7 - 6;
              let i_muutto = kunta_id * 7 - 5;
              let i_koulutus = kunta_id * 7 - 4;
              let i_tyottomyys = kunta_id * 7 - 3;
              let i_elakelaiset = kunta_id * 7 - 2;
              let i_huoltosuhde = kunta_id * 7 - 1;

              asukasluku = json.data[i_asukasluku].values[0];
              vakimuutos = json.data[i_vakimuutos].values[0];
              muutto = json.data[i_muutto].values[0];
              koulutus = json.data[i_koulutus].values[0];
              tyottomyys = json.data[i_tyottomyys].values[0];
              elakelaiset = json.data[i_elakelaiset].values[0];
              huoltosuhde = json.data[i_huoltosuhde].values[0];

              console.log('asukasluku: ' + asukasluku);
              console.log('väkiluvun muutos: ' + vakimuutos);
              console.log('Muuttovoitto / tappio: ' + muutto);
              console.log('Korkeakoulutus: ' + koulutus);
              console.log('Työttömyys: ' + tyottomyys);
              console.log('Eläkeläiset: ' + elakelaiset);
              console.log('Huoltosuhde: ' + huoltosuhde);

              vastaus.innerHTML = `<h2>${nimi}</h2>`;
              vastaus.innerHTML += `<ul>`;
              vastaus.innerHTML += `<li>Asukasluku: ${asukasluku}</li>`;
              vastaus.innerHTML += `<li>Väkiluvun muutos: ${vakimuutos}</li>`;
              vastaus.innerHTML += `<li>Muuttovoitto / tappio: ${muutto} hlö vuoden 2017 aikana</li>`;
              vastaus.innerHTML += `<li>Korkeakoulutus: ${koulutus}</li>`;
              vastaus.innerHTML += `<li>Työttömyys: ${tyottomyys}</li>`;
              vastaus.innerHTML += `<li>Eläkeläiset: ${elakelaiset}</li>`;
              vastaus.innerHTML += `<li>Huoltosuhde: ${huoltosuhde}</li>`;
              vastaus.innerHTML += `<ul>`;

            }).catch(function(error) {
              console.log(error);
            })

            .catch(function(error) {
              console.log(error);
            }));



            return  nimi;
          });




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
          m.push(muoto[u].lat, muoto[u].lng);
          //console.log(m);
          v.push(m);
        }

        let poly = L.polygon(
            v
        );
        poly.addTo(mymap).
            //  bindPopup(`${data[i].properties.name}`);
            bindPopup(function() {
              let nimi = data[i].properties.name;
              const path = 'https://pxnet2.stat.fi:443/PXWeb/api/v1/fi/Kuntien_avainluvut/2018/kuntien_avainluvut_2018_viimeisin.px';
              let kunta_code;
              let kunta_id;
              let asukasluku;
              let muutto;
              let vakimuutos;
              let koulutus;
              let tyottomyys;
              let elakelaiset;
              let huoltosuhde;

              fetch(path).then(function(vastaus) {
                return vastaus.json();
              }).then(function(json) {
                kunta_id = +(json.variables[0].valueTexts.indexOf(nimi));
                kunta_code = json.variables[0].values[kunta_id];
                console.log(kunta_id);
              }).then(fetch(path, asetukset).then(function(vastaus) {
                return vastaus.json();
              }).then(function(json) {
                let i_asukasluku = kunta_id * 7 - 7;
                let i_vakimuutos = kunta_id * 7 - 6;
                let i_muutto = kunta_id * 7 - 5;
                let i_koulutus = kunta_id * 7 - 4;
                let i_tyottomyys = kunta_id * 7 - 3;
                let i_elakelaiset = kunta_id * 7 - 2;
                let i_huoltosuhde = kunta_id * 7 - 1;

                asukasluku = json.data[i_asukasluku].values[0];
                vakimuutos = json.data[i_vakimuutos].values[0];
                muutto = json.data[i_muutto].values[0];
                koulutus = json.data[i_koulutus].values[0];
                tyottomyys = json.data[i_tyottomyys].values[0];
                elakelaiset = json.data[i_elakelaiset].values[0];
                huoltosuhde = json.data[i_huoltosuhde].values[0];

                console.log('asukasluku: ' + asukasluku);
                console.log('väkiluvun muutos: ' + vakimuutos);
                console.log('Muuttovoitto / tappio: ' + muutto);
                console.log('Korkeakoulutus: ' + koulutus);
                console.log('Työttömyys: ' + tyottomyys);
                console.log('Eläkeläiset: ' + elakelaiset);
                console.log('Huoltosuhde: ' + huoltosuhde);

                aside.innerHTML = `<h2>${nimi}</h2>`;
                aside.innerHTML += `<ul>`;
                aside.innerHTML += `<li>Väkiluku, 2017: ${asukasluku}</li>`;
                aside.innerHTML += `<li>Väkiluvun muutos edellisestä vuodesta, 2017: ${vakimuutos}%</li>`;
                aside.innerHTML += `<li>Muuttovoitto / tappio: ${muutto} hlö vuoden 2017 aikana</li>`;
                aside.innerHTML += `<li>Korkeakoulutus: ${koulutus}% väestöstä</li>`;
                aside.innerHTML += `<li>Työttömyys: ${tyottomyys}%</li>`;
                aside.innerHTML += `<li>Eläkeläiset: ${elakelaiset}%</li>`;
                aside.innerHTML += `<li>Huoltosuhde: ${huoltosuhde}</li>`;
                aside.innerHTML += `<ul>`;

              }).catch(function(error) {
                console.log(error);
              })

              .catch(function(error) {
                console.log(error);
              }));



              return aside.innerHTML = `${nimi}`;
            });


      }
    }



  }

}


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


function klikkaus(e) {



  console.log(e.target._popup);
}
