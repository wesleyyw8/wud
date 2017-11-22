
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
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: user
    })
    .then(resp => resp.json())
    .then(response => { 
      console.log(response)
      resolve(response);
    })

  });
}