import React from 'react';
import { GoHome } from 'react-icons/go';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import './footer.css'
import { format } from 'date-fns'
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='bg-slate-600 text-white mt-40 p-8 gap-4'>
            <div className='lg:flex md:flex justify-around'>
                <div>
                    <h1 className='text-5xl mt-12 text-center'> CONTUCT</h1>
                    <div className='flex justify-center '>
                        <a href="https://www.facebook.com/shuvo.gosh.5" target="blank"><FaFacebookSquare className='text-4xl mr-5 my-5'/></a>
                        <a href="https://github.com/Shuvoghosh7" target="blank"><AiFillGithub className='text-4xl mr-5 my-5'/></a>
                        <a href="https://my-portfolio-6da75.web.app" target="blank"><CgProfile className='text-4xl mr-5 my-5'/></a>
                        <a href="https://www.linkedin.com/in/shuvogosh/" target="blank"><AiFillLinkedin className='text-4xl my-5'/></a>
                    </div>
                </div>
                <div>

                    <p class="flex items-center justify-center md:justify-start mb-4 mt-5">

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
            <div className='text-center mt-12 flex justify-center'>
                <h1>&copy; Shuvo Gosh</h1>
                <p className='ml-5'>{format(new Date(), 'yyyy-MM-dd')}</p>
            </div>
        </div>
    );
};

export default Footer;