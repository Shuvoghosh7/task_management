import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = ({ children }) => {
    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">

                <div class="w-full navbar bg-neutral fixed top-0 z-50 lg:px-20 text-white">


                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    <div class="flex-auto hidden lg:block ">
                        <div className='flex justify-center'>
                            <ul class="menu menu-horizontal gap-x-2 ">
                                <li><Link to='/' className='rounded-lg'>Home</Link></li>
                                <li><Link to='/ToDo' className='rounded-lg'>TO-DO</Link></li>
                                <li><Link to='/CompletedTasks' className='rounded-lg'>Completed Tasks</Link></li>
                                <li><Link to='/calendar' className='rounded-lg'> Calendar</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-56 bg-black text-white text-xl">

                    <li><Link to='/ToDo' className='rounded-lg'>TO-DO</Link></li>
                    <li><Link to='/about' className='rounded-lg'>Completed Tasks</Link></li>
                    <li><Link to='/Calendar' className='rounded-lg'> Calendar</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;