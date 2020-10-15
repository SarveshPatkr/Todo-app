import React from 'react'
import './TODO.css';
import { db } from './firebase';

function TODO(props) {
    return (

        <div>
            <p className='para'>{props.todo.todo}</p>
            <div className='deltbtn'>
               <button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>Delete</button> 
            </div>
            
        </div>


    )
}

export default TODO
