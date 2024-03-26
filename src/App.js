import './App.css';
import Input from './components/input';
import TextArea from './components/text';
import List from './components/list'
import { React, useState, useEffect } from 'react';
import Delete from './components/Delete';


function App() {
  let storageItems;
  if (sessionStorage.getItem("key") == null) {
    storageItems = []
  }else{
    storageItems = JSON.parse(sessionStorage.getItem("key"));
  }
   
  const [todos, setTodos] = useState(storageItems)
  sessionStorage.setItem("key", JSON.stringify(todos))
  

  function onChange(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id == id) {
          todo.validation = !todo.validation
        }
        return todo
      })
    )
  }

  function remove(itemId) {
    setTodos(
      todos.filter((todo)=>todo.id !== itemId)
    )
  }
  
  function addItem(value) {
    setTodos(
      todos.concat([{
        value,
        id: Date.now(),
        validation: false
      }])
      
    )
  }
 
  return (
    <div className="app">
      <Input addItem={addItem} todos={todos}/> 
      {todos.length ? (
        <List todos={todos} remove={remove} onChange={onChange} />
      ) : <TextArea />}
      <Delete todos={todos} remove={remove} setTodos={setTodos}/>
    </div>
  );
}

export default App;
