import React, { useState } from 'react';
import './ShowTask.css'
import { GrUpdate } from 'react-icons/gr';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const ShowTask = ({ info, refetch }) => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const { task, _id } = info
    const navigate = useNavigate()
    const taskupdate = (taskId) => {
        navigate(`/update/${taskId}`)
    }

    const completeTask = e => {
        if (e.target.checked) {
            fetch("http://localhost:5000/complete-task", {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ task })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast.success("Complete Task Sucessfully")
                    e.target.reset();
                })
        }else{
               alert("task al ready complite")     
        }
        setIsSubscribed(current => !current);
    }
    return (
        <div className='card'>
            <h1>
                <input onClick={completeTask} type="checkbox" name="" id="" /> {task}
            </h1>
            <span onClick={() => taskupdate(_id)}>< GrUpdate /></span>
        </div>
    );
};

export default ShowTask;