export const formSelectOptions = {
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

export function getSelectValues() {
  const form = document.querySelector('#menu-container');
  const elements = form.elements;

  console.log(elements['sun'].value);
  console.log(elements['water'].value);
  console.log(elements['pets'].value);
}
