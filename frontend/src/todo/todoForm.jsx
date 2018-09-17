import React, { Component } from 'react'
import { connect }from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription, search } from './todoActions'

import Grid from '../template/grid'
import Btn from '../template/iconBtn'

class todoForm extends Component{
  constructor(props){
    super(props)
    this.handleKey = this.handleKey.bind(this)
    
  }
  componentWillMount(){
    this.props.search()
  }
      handleKey(e){
      if(e.key ==='Enter'){
        e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
      }
      else if(e.key ==='Escape'){
        props.handleClear()
    }
  }
  render(){
    return (
      <div role='Form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input
            className='form-control' id='description'
            placeholder='Adicione uma tarefa'
            onKeyUp={this.props.handleKey}
            value={this.props.description} onChange={this.props.changeDescription}></input>
        </Grid>
        <Grid cols='12 3 2'>
          <Btn
            style='primary' icon='plus'
            onclick={this.props.handleAdd}
          />
          <Btn style='info' icon='search'
            onclick={this.props.handleSearch} />
          <Btn style='secondary' icon='close'
            onclick={this.props.handleClear} />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state =>({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({
  changeDescription, search
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(todoForm)