import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import TODO from './TODO';


import './App.css';
import { db } from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, settodo] = useState([]);
  const [input, setInput] = useState(['']);
  // console.log({input})
  
  useEffect(() => {
    db.collection('todos').orderBy('timeStamp', 'desc').onSnapshot(snapshot =>{
      settodo(snapshot.docs.map(doc=> ({id: doc.id, todo: doc.data().todo})))
    })
  }, [])

  const addTodo = (event) => {
    // console.log('working');
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
      settodo([...todos, input]);
      setInput('');
    
  }

  return (
    <div className="App">
      <h1>Type your Command</h1>
      <form>
        <input placeholder='Enter Here' value={input} onChange={event => setInput(event.target.value)} />
        {/* <button type= "submit"onClick={addTodo}>Add</button> */}
        <Button className='btn'disabled={!input} color="primary" type="submit" onClick={addTodo}>Add</Button>
      </form>
      
        {todos.map(todo => (
          <TODO todo={todo}/>
        ))}
      

    </div>
  );
}

export default App;
