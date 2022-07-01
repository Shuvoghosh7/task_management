import React from 'react';

const ShowCompleteTask = ({completeInfo}) => {
    const{task}=completeInfo
    console.log(task)
    return (
        <div className='card'>
            <h1>{task}</h1>
        </div>
    );
};

export default ShowCompleteTask;