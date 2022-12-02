import './style.css';
import { Layer } from './components/Layer/index.js';
import { Drink } from './components/Drink/index.js';

export const Menu = () => {
  const element = document.createElement('section');
  element.classList.add('menu');

  element.innerHTML = `
  <div class="container">
  <h2>Naše nabídka</h2>
  <p class="menu-intro">
    Vyberte si z našeho interaktivního menu a nemusíte čekat na
    obsluhu
  </p>
  <div class="drinks-list">


  </div>

  <div class="order-detail">
    <a href="/objednavka">Detail objednávky</a>
  </div>
</div>

`;

  const drinksList = element.querySelector('.drinks-list');
  // drinksList.append(
  //   Layer({
  //     color: '#613916',
  //     label: 'espresso',
  //   }),
  // );

  drinksList.append(
    Drink({
      id: 'romano',
      name: 'Romano',
      ordered: false,
      image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
      layers: [
        {
          color: '#fbdf5b',
          label: 'citrón',
        },
        {
          color: '#613916',
          label: 'espresso',
        },
      ],
    }),
  );

  return element;
};
