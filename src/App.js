import './App.css';
import Todoinput from './Todoinput';
import Todotask from  './Todotask'
import { useState } from 'react';

function App() {
  const [todolist, setTodolist]=useState([])
  function addtodo(inputtask)
  {
     if(inputtask!=="")
     {
      setTodolist([...todolist,inputtask])
      console.log(todolist)
     }
  }
  function deletetodo(key)
  {
    let newtodolist =[...todolist]
    newtodolist.splice(key,1)
    setTodolist([...newtodolist])
  }
  return (
    <div className="App">
      <Todoinput addtodo={addtodo}/>
      <h2>Todo List</h2>
      {
        todolist.map((listitem,i)=>{
          return (
            <Todotask key={i} item={listitem} index={i} deletetodo={deletetodo}/>
          )
        })
      }
    </div>
  );
}

export default App;
