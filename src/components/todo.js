import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare , faTrashCan} from '@fortawesome/free-solid-svg-icons'

function ToDo({task , toggletodo, deletetodo, edittodo}) {
  return (
    <div className='todo'>
      <p onClick={() => toggletodo = (task.id)} 
      className= {`${task.completed ? "completed" : "" }`}> {task.task} </p>
      <div >
      <FontAwesomeIcon className='icon' icon={faPenToSquare} onClick={() => edittodo(task.id)} />
      <FontAwesomeIcon className="icon" icon={faTrashCan} onClick={() => deletetodo(task.id)} />
      </div>
    </div>
  )
}

export default ToDo;
