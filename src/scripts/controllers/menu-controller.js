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

export function triggerSubmit() {
  console.log('hi');
  document.forms['menu'].submit();
}

function submitOptions(event) {
  event.preventDefault();
  console.log(event);
}
