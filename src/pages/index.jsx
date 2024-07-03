import { render } from '@czechitas/render';
import { Header } from '../components/Header/header';
import { Banner } from '../components/Banner/banner';
import { Menu } from '../components/Menu/menu';
import { Gallery } from '../components/Gallery/gallery';
import { Contact } from '../components/Contact/contact';
import '../global.css';
import './index.css';

async function fetchDrinks() {
  try {
    const response = await fetch('http://localhost:4000/api/drinks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    console.log(data); // Výpis dat do konzole
    return data.data;
  } catch (error) {
    console.error('Error fetching drinks:', error);
  }
}

const drinkMenu = await fetchDrinks();

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinkMenu} />
      <Gallery />
      <Contact />
    </main>
  </div>,
);

const navBtn = document.querySelector('.nav-btn');
const navbar = document.querySelector('.rollout-nav');

navBtn.addEventListener('click', () => {
  navbar.classList.toggle('nav-closed');
});

const navItems = navbar.querySelectorAll('a');

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    navbar.classList.add('nav-closed');
  });
});

//Přidání posluchače událostí na každý objednávací formulář v nápojích

const drinkForms = document.querySelectorAll('.drink__controls');

drinkForms.forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const isOrdered = form.dataset.ordered === 'true';
    const drinkId = form.dataset.id;
    console.log(`Drink ID:${drinkId}`);

    const response = await fetch(
      `http://localhost:4000/api/drinks/${drinkId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          { op: 'replace', path: '/ordered', value: !isOrdered },
        ]),
      },
    );
    window.location.reload();
  });
});
