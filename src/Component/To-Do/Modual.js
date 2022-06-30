import React from 'react';
import { MdAddCircle } from 'react-icons/md';
import { toast } from 'react-toastify';
import './Modual.css'
const Modual = () => {
    const handealTask = (e) => {
        e.preventDefault();
        const task = e.target.task.value
        console.log(task)
        e.target.reset();
        fetch("http://localhost:5000/add-task", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({task})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success("Add Task Sucessfully")
                e.target.reset(); 
            })
    }
   /*  const handleKeypress = e => {
        //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        handealTask();
      }
    }; */
    const onclickkey =e=>{
        if (e.keyCode === 13) {
            handealTask();
          }
    }
    return (
        <div>

            <label for="my-modal-3" class="btn modal-button rounded-3xl"><MdAddCircle className='text-3xl'/></label>


            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Add Task!</h3>
                    <form onSubmit={handealTask} className='login-form'>
                        <input type="text" name="task" id="" className='text-area' />
                    </form>
                </div>
            </div>

        </div >
    );
};

export default Modual;