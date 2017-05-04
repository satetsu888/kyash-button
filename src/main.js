var parser = require('ua-parser-js');

const host = "https://satetsu888.github.io/kyash-button";
const baseUrl = "kyash://qr/u/";
const chartAPIBaseUrl = "http://chart.apis.google.com/chart?cht=qr&chs=200x200&chld=Q|2&chl=";

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
  var element = e.target;
  while(true) {
    if(element.classList.contains('kyash-button')) {
      break;
    }
    element = element.parentElement;
  }

  if (element.classList.contains('active')) {
    element.classList.remove('active');
  } else {
    element.classList.add('active');
  }
}

function makeAsLink(element, index, elements) {
  if(!"userId" in element.dataset){ return; }

  const userId = element.dataset.userId;
  element.setAttribute('href', baseUrl + userId);
}

function makeAsQRTip(element, index, elements) {
  if(!"userId" in element.dataset){ return; }

  const userId = element.dataset.userId;

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
  console.debug(elements);

  var ua = parser(window.navigator.userAgent);
  if (ua.os.name === "iOS"){
    elements.forEach(makeAsLink)
  } else {
    elements.forEach(makeAsQRTip)
  }
};


main();
