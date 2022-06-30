import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import './UpdateTask.css'
const UpdateTask = () => {
    const [update, setUpdate] = useState([])
    console.log(update)
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/get-task/${id}`)
            .then(res => res.json())
            .then(data => setUpdate(data))
    }, [])
    const updateTask = e => {
        e.preventDefault();
        const task = e.target.task.value

        fetch(`http://localhost:5000/update-task/${update._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ task })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast(" update Task successfully")
                e.target.reset();
            })
    }
    return (
        <div className='mt-20'>
            <div className=' login-container'>
                <form onSubmit={updateTask} className="login-form">
                    <input type="text" name="task" id="" defaultValue={update.task} />
                    <button>UPDATE</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateTask;