import MenuComponent from '../../components/menu-component.html';
import { getFormSelectOptions, getSelectValues } from '../controllers/menu-controller';

import CardComponent from '../../components/card-component.html';

export function loadComponents() {
  loadMenuComponent();
  loadCardComponent();
}

//==============================================================================

function loadMenuComponent() {
  document.querySelector('#menu').innerHTML = MenuComponent;

  loadMenuOptions('#sun-select', 'sun');
  loadMenuOptions('#water-select', 'water');
  loadMenuOptions('#pets-select', 'pets');
  loadMenuFunctions();
}

function loadMenuFunctions() {
  const selectList = document.querySelectorAll('.menu-select');
  selectList.forEach((select) => (select.onchange = getSelectValues));
  getSelectValues();
}

function loadMenuOptions(tag, name) {
  const createOption = (optionData) => `<option value="${optionData.value}">${optionData.label}</option>`;

  const formSelectOptions = getFormSelectOptions();
  const options = formSelectOptions[name].map(createOption);
  document.querySelector(tag).innerHTML = options.join('');
}

//==============================================================================

function loadCardComponent() {
  const searchResultsElement = document.querySelector('#search-results');
  searchResultsElement.innerHTML = CardComponent;
}
