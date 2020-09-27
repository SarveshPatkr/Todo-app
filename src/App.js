import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import TODO from './TODO';
// import db form './firebase';

import './App.css';
import { db } from './firebase';

function App() {
  const [todos, settodo] = useState([]);
  const [input, setInput] = useState(['']);
  // console.log({input})
  
  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot =>{
      settodo(snapshot.docs.map(doc=> doc.data().todo))
    })
  }, [])

  const addTodo = (event) => {
    // console.log('working');
    event.preventDefault();
    
      settodo([...todos, input]);
      setInput('');
    
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)} />
        {/* <button type= "submit"onClick={addTodo}>Add</button> */}
        <Button disabled={!input} color="primary" type="submit" onClick={addTodo}>Add</Button>
      </form>
      
        {todos.map(todo => (
          <TODO text={todo}/>
        ))}
      

    </div>
  );
}

export default App;
