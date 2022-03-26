import 'regenerator-runtime';
import "./assets/style/style.css";

import "./assets/script/components/header-title.js";
import "./assets/script/components/main-container.js";

import "./assets/script/data/google-maps.js";

// Import GMaps API
const testEl = document.querySelector('.test');
const scriptEl = document.createElement('script');
scriptEl.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBxVb5T_vGLLm40KFtYQci6vTIaHZqp48Y&callback=initMap');
scriptEl.async = true;
scriptEl.defer = true;
testEl.appendChild(scriptEl);

console.log("Hallo Rama");

