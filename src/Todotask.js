import React from 'react'

function Todotask(props) {
  return (
    <div>
        <li>
            {props.item}
            <span><i class="fa-solid fa-trash" onClick={()=>props.deletetodo(props.index)}></i></span>
        </li>
    </div>
  )
}

export default Todotask