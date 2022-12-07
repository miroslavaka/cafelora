//import './style.css';

console.log('funguju!');

import { Header } from './components/Header/index.js';
import { Banner } from './pages/HomePage/components/Banner/index.js';
import { Contact } from './pages/HomePage/components/Contact/index.js';
import { Footer } from './components/Footer/index.js';
import { Gallery } from './pages/HomePage/components/Gallery/index.js';
import { Menu } from './components/Menu/index.js';

const pageElement = document.createElement('div');
pageElement.classList.add('page');

const headerElement = document.createElement('header');
headerElement.append(Header());

const mainElement = document.createElement('main');
mainElement.append(Banner(), Menu({}), Gallery(), Contact());

const footerElement = document.createElement('footer');
footerElement.append(Footer());

document
  .querySelector('#app')
  .append(headerElement, mainElement, footerElement);

//routovani:

const { pathname } = window.location;

if (pathname === '/') {
  document.querySelector('#app').append(HomePage());
}
