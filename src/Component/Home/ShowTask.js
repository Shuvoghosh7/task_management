import React, { useEffect, useState } from 'react';
import './ShowTask.css'
import { GrUpdate } from 'react-icons/gr';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import oksing from '../../img/sing1.png'
const ShowTask = ({ info, refetch }) => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const { task, _id } = info
    const navigate = useNavigate()
    const taskupdate = (taskId) => {
        navigate(`/update/${taskId}`)
    }

    const completeTask = e => {

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
               
            })
        setIsSubscribed(current => !current);      
    }
    return (
        <div className='card'>
            <div className='flex justify-center gap-4'>

                <div>
                   { !isSubscribed?<input onClick={completeTask} type="checkbox" name="" id="" />: <img className='w-15 h-8 mr-5' src={oksing} alt="" />
                   } 
                </div>
                    
                <h1 className='mr-5'>{task}</h1>
            </div>
            <span onClick={() => taskupdate(_id)}>< GrUpdate /></span>
        </div>
    );
};

export default ShowTask;