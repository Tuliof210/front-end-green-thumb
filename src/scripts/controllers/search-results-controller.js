import CardComponent from '../../components/card-component.html';
import FavoriteCardComponent from '../../components/favorite-card-component.html';

import SearchResultsComponent from '../../components/search-results-component.html';
import EmptySearchResultsComponent from '../../components/empty-search-results-component.html';

import { getCurrentSearchResults } from '../services/api-service';
import { iconRules } from './card-icons-rules';

const searchResultsElement = document.querySelector('#search-results');

export function buildComponent() {
  const currentSearch = getCurrentSearchResults();

  if (currentSearch.length) buildSearchResultsComponent(currentSearch);
  else buildEmptySearchResultsComponent();
}

function buildEmptySearchResultsComponent() {
  searchResultsElement.innerHTML = EmptySearchResultsComponent;
}

function buildSearchResultsComponent(currentSearch) {
  searchResultsElement.innerHTML = SearchResultsComponent;
  const gridContainer = document.querySelector('#search-results-grid');
  gridContainer.innerHTML = populateCards(currentSearch);
}

function populateCards(currentSearch) {
  const cardStaffFavorite = findStaffFavorite(currentSearch);
  const cards = currentSearch.map(createCardElement);

  return [cardStaffFavorite, ...cards].join('');
}

function findStaffFavorite(currentSearch) {
  const index = currentSearch.findIndex((item) => item.staff_favorite);

  if (index > -1) {
    const cardData = currentSearch.splice(index, 1);
    return cardData.map(createCardElement);
  }

  return [];
}

function createCardElement(item) {
  const componentBase = item.staff_favorite ? FavoriteCardComponent : CardComponent;
  const componentWithId = componentBase.replace('generic-id', `card-${item.id}`);

  const componentWithImages = populateCardImages(componentWithId, item);
  const componentWithTexts = populateCardTexts(componentWithImages, item);
  const componentWithIcons = populateCardIcons(componentWithTexts, item);

  return componentWithIcons;
}

function populateCardImages(component, { url, name }) {
  const componentWithImage = component.replace('#generic-image', `src="${url}"`);
  const componentWithAltImage = componentWithImage.replace('generic-alt-image', name);
  return componentWithAltImage;
}

function populateCardTexts(component, { name, price }) {
  const componentWithName = component.replace('generic-name', name);
  const componentWithPrice = componentWithName.replace('generic-price', `\$${price}`);
  return componentWithPrice;
}

function populateCardIcons(component, { toxicity, sun, water }) {
  const petData = iconRules.pets.get(!toxicity);
  const componentWithPetIcon = component.replace(petData.key, petData.replacement);

  const sunData = iconRules.sun.get(sun);
  const componentWithSunIcon = componentWithPetIcon.replace(sunData.key, sunData.replacement);

  const waterData = iconRules.water.get(water);
  const componentWithWaterIcon = componentWithSunIcon.replace(waterData.key, waterData.replacement);

  return componentWithWaterIcon;
}
