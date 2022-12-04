import './style.css';

import { Drink } from './components/Drink/index.js';

export const Menu = (props) => {
  const { drinks } = props;

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
  //   Drink({
  //     id: 'romano',
  //     name: 'Romano',
  //     ordered: false,
  //     image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
  //     layers: [
  //       {
  //         color: '#fbdf5b',
  //         label: 'citrón',
  //       },
  //       {
  //         color: '#613916',
  //         label: 'espresso',
  //       },
  //     ],
  //   }),
  // );

  if (drinks === undefined) {
    fetch(`https://apps.kodim.cz/daweb/cafelora/api/me/drinks`, {
      method: 'GET',
      headers: {
        Authorization: 'Email mir.ka@gmail.com',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data: ', data);
        element.replaceWith(
          Menu({
            drinks: data.results,
          }),
        );
      });
    return element;
  }

  drinksList.append(
    ...drinks.map((drink) =>
      Drink({
        name: drink.name,
        ordered: drink.ordered,
        image: drink.image,
        layers: drink.layers,
      }),
    ),
  );

  return element;
};
