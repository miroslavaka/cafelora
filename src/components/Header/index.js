import './style.css';

export const Header = () => {
  const element = document.createElement('div');
  element.classList.add('header__content');
  element.classList.add('container');

  element.innerHTML = `
<div class="site-logo"></div>
  <div class="navigation">
    <button class="nav-btn"></button>
    <nav class="rollout-nav nav-closed">
      <a href="#home" id="banner">domů</a>
      <a href="#menu" id="menu">menu</a>
      <a href="#gallery" id="gallery">galerie</a>
      <a href="#contact" id="contact">kontakt</a>
    </nav>
  </div>
`;

  const rolloutNav = element.querySelector('.rollout-nav');
  element.querySelector('.nav-btn').addEventListener('click', () => {
    rolloutNav.classList.toggle('nav-closed');
  });

  rolloutNav.addEventListener('click', () => {
    rolloutNav.classList.add('nav-closed');
  });

  return element;
};
