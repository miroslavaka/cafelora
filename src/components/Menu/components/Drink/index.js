//import './style.css';

import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
  const { name, ordered, image, layers, drinkId } = props;

  const element = document.createElement('div');
  element.classList.add('drink');

  let btnText = 'Objednat';
  let btnClass = '';
  if (ordered === false) {
    btnText = 'Zrušit';
    btnClass = 'order-btn--ordered';
  }

  element.innerHTML = `
<div class="drink__product">
  <div class="drink__cup">
    <img
      src="${image}"
    />
  </div>
  <div class="drink__info">
    <h3>${name}</h3>
 
  </div>
</div>
<div class="drink__controls">
  <button class="order-btn" ${btnClass}>${btnText}</button>
</div>
`;

  const drinkInfo = element.querySelector('.drink__info');
  drinkInfo.append(
    ...layers.map((layer) =>
      Layer({
        color: layer.color,
        label: layer.label,
      }),
    ),
  );

  const btn = element.querySelector('.order-btn');

  // btn.addEventListener('click', () => {
  //   if (ordered === false) {
  //     btn.textContent = 'Zrušit';
  //   } else if (ordered === true) {
  //     btn.textContent = 'Objednat';
  //     btn.classList.add('order-btn--ordered');
  //   }
  // });

  btn.addEventListener('click', () => {
    fetch(`https://apps.kodim.cz/daweb/cafelora/api/me/drinks/${drinkId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Email mir.ka@gmail.com',
      },
      body: JSON.stringify({ ordered: !ordered }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results),
          element.replaceWith(
            Drink({
              name: data.results.name,
              ordered: data.results.ordered,
              image: data.results.image,
              layers: data.results.layers,
              drinkId: data.results.id,
            }),
          );
      });
  });
  return element;
};
