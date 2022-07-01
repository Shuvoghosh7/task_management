import React from 'react';
import { useQuery } from 'react-query';
import ShowCompleteTask from './ShowCompleteTask';
const CompleteTask = () => {
    const { data: completeTask, isLoading, refetch } = useQuery('completeTask', () => fetch('https://evening-eyrie-20903.herokuapp.com/get-complete-task').then(res => res.json()))

    if (isLoading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <div className="w-16 h-16 border-b-2 border-white rounded-full animate-spin"></div>
            </div>
        );
    }
    return (
        <div className='mt-20 mx-10'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                {
                    completeTask?.map(completeInfo => <ShowCompleteTask
                        completeInfo={completeInfo}
                    />)
                }
            </div>
        </div>
    );
};

export default CompleteTask;