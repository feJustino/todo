import Axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = e => ({
  type:'DESCRIPTION_CHANGED',
  payload: e.target.value
})

export const getList = () =>(
  Axios.get(`${URL}?sort=-createdAt${search}`)
  .then(resp=> this.setState({...this.state, list: resp.data, description}))
)