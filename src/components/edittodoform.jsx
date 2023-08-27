import React, { useState } from "react";


function EditToDoForm({edittodo, task}) {

    const [value , setValue] = useState(task.task)

    const handleSubmit = (event) => {
        event.preventDefault();

        edittodo(value, task.id);

        setValue("");
    }

    const handleChange = (event)=> {
        setValue(event.target.value) 
    } 

    return (
              <form className='form' onSubmit={handleSubmit}>
                  <input type='text' 
                  value={value} 
                  onChange={handleChange} 
                  placeholder='Update Task' >
                  </input>
                  <button type='submit'>UPDATE TASK</button>
              </form> 
    )
}


export default EditToDoForm;