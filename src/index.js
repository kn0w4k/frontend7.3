import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './input.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let data = '{ "browsers" : [' +
'{ "browser":"Firefox" , "img":"https://logospng.org/download/firefox/logo-firefox-browser-4096.png", "desc":"Mozilla is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018." },' +
'{ "browser":"Google Chrome" , "img":"https://1000logos.net/wp-content/uploads/2017/08/Chrome-Logo.png", "desc":"Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world\'s most popular web browser today!" },' +
'{ "browser":"Microsoft Edge" , "img":"https://logos-download.com/wp-content/uploads/2016/03/Microsoft_Edge_logo.png", "desc":"Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer." } ]}';

const browsersData = JSON.parse(data);
 function loadBrowserData() {
  for(let i = 0; i < browsersData.browsers.length; i++) {
    let copiedElement = document.querySelector('section article').cloneNode(true);

    let browserName = browsersData.browsers[i].browser;
    let logoImage = browsersData.browsers[i].img;
    let browserDesc = browsersData.browsers[i].desc;
  
    copiedElement.querySelector('h3').innerHTML = browserName;
    copiedElement.querySelector('img').src = logoImage;
    copiedElement.querySelector('div').innerHTML = browserDesc;
    copiedElement.style['display'] = "";
    const targetElement = document.querySelector('section');
  
    targetElement.append(copiedElement);
  }
 }

 loadBrowserData();