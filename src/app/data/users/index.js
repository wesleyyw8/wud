const url = 'http://localhost:8000/users';

export const getUsers = () => {
  return new Promise((resolve) => {
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

export const createUser = (user) => {
  user = JSON.stringify(user);
  console.log(user);
  return new Promise((resolve) => {
    return fetch(url, {
      method: 'POST',
      body: user
    })
    .then(response => { 
      console.log(response);
      return response;
    })
    .then(data => {
      resolve(data);
    });
  });
}