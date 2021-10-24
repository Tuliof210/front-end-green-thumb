import MenuComponent from '../../components/menu-component.html';
import CardComponent from '../../components/card-component.html';

const menuElement = document.querySelector('#menu');
const searchResultsElement = document.querySelector('#search-results');

export function loadMenuComponent() {
  menuElement.innerHTML = MenuComponent;
}

export function loadCardComponent() {
  searchResultsElement.innerHTML = CardComponent;
}
