import React from 'react';
import './ShowTask.css'
const ShowTask = ({tasks}) => {
    return (
        <div className='card'>
            <h1><input type="checkbox" name="" id="" /> {tasks.task}</h1>
        </div>
    );
};

export default ShowTask;