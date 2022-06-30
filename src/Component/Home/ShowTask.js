import React from 'react';
import './ShowTask.css'
import { GrUpdate } from 'react-icons/gr';
import { toast } from 'react-toastify';
import  {useNavigate}  from 'react-router-dom';
const ShowTask = ({ info,refetch }) => {
    const{task,_id}=info
    const navigate = useNavigate()
    const taskupdate = (taskId) => {
        navigate(`/update/${taskId}`)
    }
    return (
        <div className='card'>
            <h1><input type="checkbox" name="" id="" /> {task}
            </h1>
            <span onClick={()=>taskupdate(_id)}>< GrUpdate/></span>
        </div>
    );
};

export default ShowTask;