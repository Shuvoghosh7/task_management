import React from 'react';

import { useQuery } from 'react-query';
import ShowTask from './ShowTask';
const Home = () => {
  const { data: taskinfo, isLoading, refetch } = useQuery('taskinfo', () => fetch('https://evening-eyrie-20903.herokuapp.com/task').then(res => res.json()))
  
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
          taskinfo?.map(info => <ShowTask

            info={info}
            refetch={refetch}
          />)
        }
      </div>
    </div>
  );
};

export default Home;