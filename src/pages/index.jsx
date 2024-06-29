import { render } from '@czechitas/render';
import { Header } from '../components/Header/header';
import { Banner } from '../components/Banner/banner';
import { Menu } from '../components/Menu/menu';
import { Gallery } from '../components/Gallery/gallery';
import { Contact } from '../components/Contact/contact';
import '../global.css';
import './index.css';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
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
