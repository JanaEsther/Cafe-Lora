import { Layer } from '../Layer/layer';
import './drink.css';

export const Drink = ({ id, name, ordered, image, layers }) => {
  return (
    <div className="drink">
      <div className="drink__product">
        <div className="drink__cup">
          <img src={image} alt={name} />
        </div>
        <div className="drink__info">
          <h3>{name}</h3>
          {layers.map((layer) => (
            <Layer key={layer.label} label={layer.label} color={layer.color} />
          ))}
        </div>
      </div>
      <form className="drink__controls" data-ordered={ordered} data-id={id}>
        <button className="order-btn order-btn--ordered">
          {ordered ? 'Zrušit' : 'Objednat'}
        </button>
      </form>
    </div>
  );
};
