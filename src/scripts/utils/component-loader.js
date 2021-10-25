import HeaderComponent from '../../components/header-component.html';
import MenuComponent from '../../components/menu-component.html';

import { getFormSelectOptions, getSelectValues } from '../controllers/menu-controller';
import { buildComponent } from '../controllers/search-results-controller';

export function loadComponents() {
  // loadHeaderComponent();
  loadMenuComponent();
}
//==============================================================================
function loadHeaderComponent() {
  const headerElement = document.querySelector('header');
  headerElement.innerHTML = HeaderComponent;
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
  const defaultOption = '<option value="">Select...</option>';
  const createOption = (optionData) => `<option value="${optionData.value}">${optionData.label}</option>`;

  const formSelectOptions = getFormSelectOptions();
  const options = formSelectOptions[name].map(createOption);
  document.querySelector(tag).innerHTML = [defaultOption, ...options].join('');
}

//==============================================================================

function loadSearchResultsComponent() {
  const searchResultsElement = document.querySelector('#search-results');
  searchResultsElement.innerHTML = buildComponent();
}
