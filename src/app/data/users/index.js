const url = 'http://localhost:8000/users';

export const getUsers = () => {
  fetch(url, {
    method: 'get',
    mode: 'no-cors'
  })
  .then(response => { 
    return response;
  })
  .then(data => data);
}