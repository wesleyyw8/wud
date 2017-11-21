const url = 'http://localhost:8000/users';

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    return fetch(url, {
      method: 'GET'
    })
    .then(response => { 
      return response.json();
    })
    .then(data => {
      resolve(data);
    });
  });
}