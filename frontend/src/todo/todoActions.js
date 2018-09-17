import Axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = e => ({
  type:'DESCRIPTION_CHANGED',
  payload: e.target.value
})

export const search = () =>{
  const request = Axios.get(`${URL}?sort=-createdAt`)

  return{
    type:'TODO_SEARCHED',
    payload: request
  }
}