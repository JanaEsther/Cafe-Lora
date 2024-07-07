import { OrderItem } from '../OrderItem/orderItem';

export const OrderPart = ({ items }) => {
  return (
    <div className="order">
      {items.length === 0 ? (
        <p>Zatím nemáte nic objednáno</p>
      ) : (
        <div className="order-items">
          {items.map((item) => (
            <OrderItem key={item.id} name={item.name} image={item.image} />
          ))}
        </div>
      )}
    </div>
  );
};
