
'use strict';
const ul = document.querySelector('#results');
const bot = document.querySelector('.bot');
bot.style.display = 'none';
const res = document.querySelector('#res');
document.querySelector('#nappi').addEventListener('click', function() {
  const haku = document.querySelector('#hakukentta').value;
  fetch('http://api.tvmaze.com/search/shows?q=' + haku).then(function(vastaus) {
    return vastaus.json();
  }).then(function(json) {
    showlist(json);
  }).catch(function(error) {
    console.log(error);
  });
});

document.addEventListener('keyup', function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.querySelector('#nappi').click();
  }
});

function showlist(lista) {
  ul.innerHTML = '';
  for (let i = 0; i < lista.length; i++) {
    res.style.display = 'flex';
    bot.style.display = 'inline';

    ul.innerHTML += `<li id="lis">`;
    if (lista[i].show.image != null) {
      console.log(lista[i].show.image.medium);
      ul.innerHTML += `<img id="kuva" src="${lista[i].show.image.medium}">`;
    }
    ul.innerHTML += `<ul style="display: inline">`;
    for (let e = 0; e < lista[i].show.genres.length; e++) {
      console.log(lista[i].show.genres[e]);
      ul.innerHTML += `<li style='list-style: none; font-weight: bold'>${lista[i].show.genres[e]}</li>`;
    }
    ul.innerHTML += `</ul>`;
    ul.innerHTML += `<h2>${lista[i].show.name}</h2>`;
    ul.innerHTML += `<p>${lista[i].show.summary}</p>`;
    if (lista[i].show.officialSite != null) {
      console.log(lista[i].show.officialSite);
      ul.innerHTML += `<a style="border: 2px solid red;border-radius: 4px;color: black;background-color: darkred; text-decoration: none; " href="${lista[i].show.officialSite}">Official&nbsp;site</a>`;
    }
    ul.innerHTML += `</li>`;
  }

}
