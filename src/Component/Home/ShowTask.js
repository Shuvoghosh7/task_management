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

        fetch("https://evening-eyrie-20903.herokuapp.com/complete-task", {
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
        
    }
    const handealDelete = () => {
            const url = `https://evening-eyrie-20903.herokuapp.com/detete-task/${_id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                })
        
    }
    return (
        <div className='card'>
            <div className='flex justify-center gap-4'>
                <div onClick={handealDelete}>
                    <input onClick={completeTask}  type="checkbox" name="" id="" /> 
                </div>

                <h1 className='mr-5'>{task}</h1>
            </div>
            <span onClick={() => taskupdate(_id)}>< GrUpdate /></span>
        </div>
    );
};

export default ShowTask;