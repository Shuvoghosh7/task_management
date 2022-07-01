import React from 'react';
import { toast } from 'react-toastify';

const ToDo = () => {
    const handealTask = (e) => {
        e.preventDefault();
        const task = e.target.task.value
        e.target.reset();
        fetch("http://localhost:5000/add-task", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ task })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Add Task Sucessfully")
                e.target.reset();
            })
    }

    const onclickkey = e => {
        if (e.keyCode === 13) {
            handealTask();
        }
    }
    return (
        <div className='mt-20'>
            <div className='text-center login-container'>
                <h1 className='font-bold'>ADD NEW TASK</h1>
                <form onSubmit={handealTask} className="login-form">
                    <input type="text" name="task" id="" placeholder='Pass enter for add your task' onKeyPress={onclickkey} />
                </form>

            </div>
        </div>
    );
};

export default ToDo;