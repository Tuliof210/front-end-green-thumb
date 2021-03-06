import { requestSearchResults } from '../services/api-service';
import { buildComponent } from './search-results-controller';

const formSelectOptions = {
  sun: [
    { label: 'No', value: 'no' },
    { label: 'Low', value: 'low' },
    { label: 'High', value: 'high' },
  ],
  water: [
    { label: 'Regularly', value: 'regularly' },
    { label: 'Daily', value: 'daily' },
    { label: 'Rarely', value: 'rarely' },
  ],
  pets: [
    { label: 'Yes', value: 'true' },
    { label: 'No', value: 'false' },
  ],
};

export function getFormSelectOptions() {
  return formSelectOptions;
}

export function getSelectValues() {
  const form = document.querySelector('#menu-form');
  const elements = form.elements;

  const sunValue = elements['sun'].value;
  const waterValue = elements['water'].value;
  const petsValue = elements['pets'].value;

  requestSearchResults(sunValue, waterValue, petsValue).then(buildComponent);
}
