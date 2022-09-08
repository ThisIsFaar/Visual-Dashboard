const backendURL = process.env.REACT_APP_API_URL;
console.log(`${backendURL}/data`);

export const getData = () => {
  return fetch(`${backendURL}/data`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
