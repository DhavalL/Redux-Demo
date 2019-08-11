export const changeVal = (payload) => {
  return { type: 'CHANGE_VAL', payload }
}

export const getData = () => (dispatch) => (
  fetch('https://reqres.in/api/users?page=2').then(res => res.json()).then(res =>
    dispatch({ type: 'CHANGE_VAL', value: res.data.data }))
)

export const loginData = (data) => (dispatch) => {
  return fetch('https://reqres.in/api/register', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json()).then(res => {
    return dispatch({ type: 'CHANGE_VAL', payload: res.error ? res.error : JSON.stringify(res.token) });
  })
}