import CardComponent from '../../components/card-component.html';
import SearchResultsComponent from '../../components/search-results-component.html';
import EmptySearchResultsComponent from '../../components/empty-search-results-component.html';

import { getCurrentSearchResults } from '../services/api-service';

const searchResultsElement = document.querySelector('#search-results');

export function buildComponent() {
  const results = getCurrentSearchResults();
  const component = results.length ? buildSearchResultsComponent() : buildEmptySearchResultsComponent();
  searchResultsElement.innerHTML = component;
}

function buildEmptySearchResultsComponent() {
  return EmptySearchResultsComponent;
}

function buildSearchResultsComponent() {
  return SearchResultsComponent;
}
