import React, {Component} from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import Todolist from './todolist';

const URL = 'http://localhost:3003/api/todos'

class Todo extends Component{
  constructor(props){
    super(props)
    this.state = { description: '', list: []}

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleExclude = this.handleExclude.bind(this)
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.refresh()
  }
  refresh(description = ''){
        const search =description ? `&description__regex=/${description}/` : ''
        Axios.get(`${URL}?sort=-createdAt${search}`)
        .then(resp=> this.setState({...this.state, list: resp.data, description}))
  }

  handleChange(e){
      this.setState({...this.state, description: e.target.value})
  }

  handleClick(){
        const description = this.state.description
        Axios.post(URL, {description})
        .then(resp => {this.refresh(), this.setState({...this.state, description: ''})})
  }

  handleExclude(item){
    const id = item._id
    Axios.delete(`${URL}/${id}`)
    .then(resp => this.refresh(this.state.description))

  }

  handleMarkAsDone(item){
    const id = item._id
    Axios.put(`${URL}/${id}`, {...item, done: true})
    .then(resp => {this.refresh(this.state.description)})
  }

  handleMarkAsPending(item){
    const id = item._id
    Axios.put(`${URL}/${id}`, {...item, done: false})
    .then(resp => {this.refresh(this.state.description)})
  }

  handleSearch(){
    this.refresh(this.state.description)
  }

  handleClear(){
    {this.refresh(), this.setState({...this.state, description: ''})}
  }

  render(){
    return ( 
    <div>
      <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
      <TodoForm 
      description={this.state.description}
      handleChange={this.handleChange}
      handleAdd={this.handleClick}
      handleSearch={this.handleSearch} 
      handleClear={this.handleClear}
      />
      <Todolist 
      lista={this.state.list}
      handleMarkAsDone={this.handleMarkAsDone} 
      handleMarkAsPending={this.handleMarkAsPending} 
      handleExclude={this.handleExclude} 
      />
    </div>
  )
  }
}


const mapStateToProps = state =>({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({
  changeDescription
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
