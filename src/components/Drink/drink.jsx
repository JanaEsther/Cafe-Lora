import './drink.css';

const Drink = (props) => {
  const drinkElm = document.createElement('div');
  drinkElm.classList.add('drink');
  drinkElm.innerHTML = `
    <div class="drink__product">
      <div class="drink__cup">
        <img src="/assets/cups/${props.id}.png" />
      </div>
      <div class="drink__info">
        <h3>${props.name}</h3>
      </div>
    </div>
    <div class="drink__controls">
      <button class="order-btn">Objednat</button>
    </div>
`;
};
