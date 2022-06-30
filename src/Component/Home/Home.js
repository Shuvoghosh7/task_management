import React from 'react';

import { useQuery } from 'react-query';
import ShowTask from './ShowTask';
const Home = () => {
    const { data: taskinfo, isLoading, refetch } = useQuery('taskinfo', () => fetch('http://localhost:5000/task').then(res => res.json()))
    
    return (
        <div className='mt-20 mx-10'>
           
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
            {
                taskinfo?.map(info =><ShowTask
                
                info={info}
                refetch={refetch}
                />)
            }
          </div>
        </div>
    );
};

export default Home;