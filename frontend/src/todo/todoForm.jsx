import React from 'react'
import Grid from '../template/grid'
import Btn from '../template/iconBtn'

export default props => {
  const handleKey= (e) => {
    if(e.key ==='Enter'){
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    }
    else if(e.key ==='Escape'){
      props.handleClear()
    }
  }

  return (
    <div role='Form' className='todoForm'>
      <Grid cols='12 9 10'>
        <input
          className='form-control' id='description'
          placeholder='Adicione uma tarefa'
          onKeyUp={handleKey}
          value={props.description} onChange={props.handleChange}></input>
      </Grid>
      <Grid cols='12 3 2'>
        <Btn
          style='primary' icon='plus'
          onclick={props.handleAdd}
        />
        <Btn style='info' icon='search'
          onclick={props.handleSearch} />
        <Btn style='secondary' icon='close'
          onclick={props.handleClear} />
      </Grid>
    </div>
  )
}