import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
function Todoinput(props) {
    const [inputtask,setInputtask]=useState("")
  return (
    <div>
        <input type='text' value={inputtask} 
        onChange={(e)=>setInputtask(e.target.value)}/>
        <Button variant="success" className='ms-4 rounded-circle but' 
        onClick={()=>{props.addtodo(inputtask) 
         setInputtask("")}}>Add</Button>{' '}
    </div>
  )
}

export default Todoinput