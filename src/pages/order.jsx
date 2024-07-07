import { render } from '@czechitas/render';
import { Header } from '../components/Header/header';
import { Footer } from '../components/Footer/footer';
import { OrderPart } from '../components/OrderPart/orderPart';
import '../global.css';
import './index.css';
import './order.css';

const fetchOrderedDrinks = async () => {
  const response = await fetch(
    'http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image',
  );
  const json = await response.json();
  return json.data;
};

const OrderPage = async () => {
  const items = await fetchOrderedDrinks();

  document.querySelector('#root').innerHTML = render(
    <div className="page">
      <div className="page">
        <Header showMenu={false} />

        <main className="order">
          <div className="container order__content">
            <h1>Vaše objednávka</h1>
            {items.length === 0 ? (
              <p className="empty-order">Zatím nemáte nic objednáno.</p>
            ) : (
              <OrderPart items={items} />
            )}
          </div>
        </main>
        <Footer />
      </div>
    </div>,
  );
};

OrderPage();
