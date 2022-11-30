import './style.css';

export const Footer = () => {
  const element = document.createElement('div');
  element.classList.add('container');

  element.innerHTML = `
  <div class="footer__content">
    Café Lóra je tréningový projekt v rámci Czechitas kurzu JavaScript 2
  </div>
`;
  return element;
};
