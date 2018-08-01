var marvin = ['Leave me down here, I\'m fine, really', 'I\'m just a footer. nobody remember me', 'Welcome to the site, not that you\'ve noticed me.', 'Thanks for reading me, I guess.']
var fancywords = ['fancy', 'unique', 'different', 'synergistic', 'inspiring'];
var timer = window.setInterval(fancyWordSetter, 5000);
var failing = false;
document.getElementById("navburger").addEventListener('click', openMobileNav);
window.addEventListener('load', e => document.getElementById('footer').innerText = marvin[Math.floor(Math.random() * marvin.length)])

function openMobileNav (e) {
  let disp = document.getElementById('navitems').style.display;
  if (disp === 'block') {
    document.getElementById('navitems').style.display = 'none';
  }
  else {
    document.getElementById('navitems').style.display = 'block';
  }
}

function fancyWordSetter () {
  let num = Math.floor(Math.random() * (fancywords.length + 1));
  if (failing) {
    clearInterval(timer);
    timer = window.setInterval(fancyWordSetter, 5000);
  }
  if (num > fancywords.length) {
    document.getElementById('fancyword').innerText = 'failing';
    clearInterval(timer);
    timer = window.setInterval(fancyWordSetter, 2000);
  } else
    document.getElementById('fancyword').innerText = fancywords[Math.floor(Math.random() * fancywords.length)]
}