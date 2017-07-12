var parser = require('ua-parser-js');

const host = "https://satetsu888.github.io/kyash-button";
const baseUrl = "kyash://qr/u/";
const chartAPIBaseUrl = "https://chart.apis.google.com/chart?cht=qr&chs=200x200&chld=Q|2&chl=";

function getElements() {
  return document.querySelectorAll('a.kyash-button');
}

function loadCss() {
  var style = document.createElement('link');
  style.setAttribute('rel', 'stylesheet');
  style.setAttribute('href', host + '/dest/style.css');
  style.setAttribute('type', 'text/css');
  document.body.appendChild(style);
}

function toggle(e) {
  var element = e.currentTarget;

  if (element.classList.contains('active')) {
    element.classList.remove('active');
  } else {
    element.classList.add('active');
  }
}

function makeAsLink(element) {
  if(!element.getAttribute('data-user-id')){ return; }

  const userId = element.getAttribute('data-user-id');
  element.setAttribute('href', baseUrl + userId);
}

function makeAsQRTip(element) {
  if(!element.getAttribute('data-user-id')){ return; }

  const userId = element.getAttribute('data-user-id');

  var tooltip = document.createElement('div');
  tooltip.setAttribute('class', 'kyash-button-tooltips');
  var qrcode = document.createElement('img');
  qrcode.setAttribute('src', chartAPIBaseUrl + baseUrl + userId);
  tooltip.appendChild(qrcode);
  var a = document.createElement('a');
  a.setAttribute('href', 'https://kyash.co/');
  a.setAttribute('target', '_blank');
  a.innerText = "Kyashとは？";
  tooltip.appendChild(a);
  element.appendChild(tooltip);
  element.addEventListener('click', toggle);
}

function main() {
  loadCss();
  var elements = getElements();

  var ua = parser(window.navigator.userAgent);
  for(var i=0; i<elements.length; i++){
    if (ua.os.name === "iOS"){
      makeAsLink(elements[i]);
    } else if(ua.os.name === "Android"){
      makeAsLink(elements[i]);
    } else {
      makeAsQRTip(elements[i]);
    }
  }
};


main();
