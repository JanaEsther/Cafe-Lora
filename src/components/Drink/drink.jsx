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
            <Layer label={layer.label} color={layer.color} />
          ))}
        </div>
      </div>
      <form className="drink__controls">
        <button className="order-btn">Objednat</button>
      </form>
    </div>
  );
};
