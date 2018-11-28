
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
