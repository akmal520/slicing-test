import { Button } from '@material-tailwind/react';
import React from 'react';
import Navbar from '../Navbar/Navbar';

const HeaderABoutUs = () => {
    return (
        <header className='bg-[#2161D5] w-full h-screen relative mb-16'>
            <Navbar text="text-white hover:text-white" border="border-white" button="text-white" img="/images/logo-full-white.svg" />
            <div className='flex flex-col items-center justify-center text-center'>
                <img src="/images/circle-white-full.svg" alt="..." className='absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 select-none pointer-events-none' />
                <div className='mt-16 z-50'>
                    <h1 className='text-white text-5xl font-medium font-rubik capitalize mb-7'>about us</h1>
                    <p className='text-white text-base font-normal font-rubik w-[562px] leading-[32px]'>
                        A small company offering data-driven solutions for campaign effectiveness using spatial data and detailed analysis of target audience (voters). Use technology that unites spatial data science and political science.
                    </p>
                </div>
                <Button variant='filled' className='mt-10 bg-white text-[#2161D5] hover:bg-white hover:text-[#2161D5] text-base font-medium font-rubik capitalize px-12 py-4 rounded-full'>contact us</Button>
            </div>
        </header>
    );
};

export default HeaderABoutUs;