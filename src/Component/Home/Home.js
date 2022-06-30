import React from 'react';

import { useQuery } from 'react-query';
import ShowTask from './ShowTask';
const Home = () => {
    const { data: taskinfo, isLoading, refetch } = useQuery('taskinfo', () => fetch('http://localhost:5000/task').then(res => res.json()))
    return (
        <div className='mt-20 mx-10'>
           
          <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4'>
            {
                taskinfo?.map(tasks =><ShowTask
                tasks={tasks}
                />)
            }
          </div>
        </div>
    );
};

export default Home;