
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
  return new Promise((resolve, reject) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(resp => {
      if (resp.status !== 200) {
        throw('error on create user');
      }
      return resp.json()
    })
    .then(response => { 
      resolve(response);
    })
    .catch( err => {
      reject(err);
    });
  });
}

export const deleteUser = (userId) => {
  return new Promise((resolve, reject) => {
    return fetch(`${url}/${userId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(resp => {
      if (resp.status !== 200) {
        throw('error on delete user');
      }
      return resp.json()
    })
    .then(response => { 
      resolve(response);
    })
  });
}