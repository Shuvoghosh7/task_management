import React from 'react';
import { useQuery } from 'react-query';
import ShowCompleteTask from './ShowCompleteTask';
const CompleteTask = () => {
    const { data: completeTask, isLoading, refetch } = useQuery('completeTask', () => fetch('http://localhost:5000/get-complete-task').then(res => res.json()))
    return (
        <div className='mt-20 mx-10'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
            {
                completeTask?.map(completeInfo =><ShowCompleteTask
                    completeInfo={completeInfo}
                />)
            }
          </div>
        </div>
    );
};

export default CompleteTask;