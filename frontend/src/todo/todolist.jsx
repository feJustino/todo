import React from 'react'
import Btn from '../template/iconBtn'

export default props =>{
  const renderRows=()=>{
    const list = props.lista || []
      return list.map(todo => (
        <tr key={todo._id}>
          <td className={todo.done ? 'markedAsDone' : ''}>
          {todo.description}
          </td>             
          <td>
            <Btn style='success' icon='check' hide={todo.done}
            onclick={() => props.handleMarkAsDone(todo)}/>
            <Btn style='warning' icon='undo' hide={!todo.done}
            onclick={() => props.handleMarkAsPending(todo)}/>
            <Btn style='danger' icon='trash-o'  hide={!todo.done}
            onclick={()=> props.handleExclude(todo)}/>
          </td>
        </tr>
      ))
  }

  return(
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th className='tableActions'>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
    )
}