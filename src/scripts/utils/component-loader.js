import MenuComponent from '../../components/menu-component.html';
import CardComponent from '../../components/card-component.html';

const menuElement = document.querySelector('#menu-container');
const apiResultsElement = document.querySelector('#api-results-container');

export function loadMenuComponent() {
  menuElement.innerHTML = MenuComponent;
}

export function loadCardComponent() {
  apiResultsElement.innerHTML = CardComponent;
}
