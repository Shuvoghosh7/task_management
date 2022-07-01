import React from 'react';
import { GoHome} from 'react-icons/go';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import './footer.css'
const Footer = () => {
    return (
        <div className='bg-slate-800 text-white mt-40 p-8 gap-4 footers mt-0'> 
            <div className='lg:flex justify-around'>
                <div>
                    <h1 className='text-5xl mt-12 text-center'> Contact</h1>
                </div>
                <div>
              
                        <p class="flex items-center justify-center md:justify-start mb-4">

                            <GoHome className='mr-4' /> Sector-11,Road-12,House-02,uttara
                        </p>
                        <p class="flex items-center justify-center md:justify-start mb-4">
                            <AiOutlineMail className='mr-4' /> expression@gmail.com
                        </p>
                        <p class="flex items-center justify-center md:justify-start mb-4">
                            <FiPhoneCall className='mr-4' />01772385111
                        </p>
                        <p class="flex items-center justify-center md:justify-start">
                            <FiPhoneCall className='mr-4' /> 01623795232
                        </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;