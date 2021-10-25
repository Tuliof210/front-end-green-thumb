const apiURL = 'https://front-br-challenges.web.app/api/v2/green-thumb';

let currentResults = [];

export function getCurrentSearchResults() {
  return currentResults;
}

export async function requestSearchResults(sun, water, pets) {
  try {
    if (!validateArguments(sun, water, pets)) {
      throw new Error('Missing arguments');
    }

    const request = `${apiURL}?sun=${sun}&water=${water}&pets=${pets}`;
    const response = await fetch(request);
    const data = await response.json();

    if (data.length) {
      currentResults = data;
    } else {
      throw new Error('No plants found');
    }
  } catch (error) {
    console.log(error.message);
    currentResults = [];
  }
}

function validateArguments(...args) {
  return args.reduce((prev, current) => prev && !!current, true);
}
