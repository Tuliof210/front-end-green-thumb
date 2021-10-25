import CardComponent from '../../components/card-component.html';
import SearchResultsComponent from '../../components/search-results-component.html';
import EmptySearchResultsComponent from '../../components/empty-search-results-component.html';

import { getCurrentSearchResults } from '../services/api-service';

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
  console.log(currentSearch);

  const cards = currentSearch.map((item) => {
    const componentBase = CardComponent;

    const componentWithId = componentBase.replace('generic-id', `card-${item.id}`);
    const componentWithImage = componentWithId.replace('#generic-image', `src="${item.url}"`);
    const componentWithAltImage = componentWithImage.replace('generic-alt-image', item.name);

    const componentWithName = componentWithAltImage.replace('generic-name', item.name);
    const componentWithPrice = componentWithName.replace('generic-price', item.price);

    console.log(componentWithPrice);

    return componentWithPrice;
  });

  return cards.join('');
}
