import React from 'react';
import Fade from 'react-reveal/Fade';
const ShowCompleteTask = ({completeInfo}) => {
    const{task}=completeInfo
    console.log(task)
    return (
        <div className='card'>
            <Fade left>
            <h1>{task}</h1>
            </Fade>
        </div>
    );
};

export default ShowCompleteTask;