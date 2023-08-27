import React, { useState } from "react";


function ToDoForm({props}) {

    const [value , setValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();

         props(value);

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
                  placeholder='What is Your Task Today?' >
                  </input>
                  <button type='submit'>ADD TASK</button>
              </form> 
    )
}


export default ToDoForm;