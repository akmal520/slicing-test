import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Advisior = () => {
    return (
        <section className='container mx-auto py-20'>
            <div className='flex flex-col items-center'>
                <FaQuoteLeft className='text-[#2161D5] text-5xl font-bold font-rubik mb-7' />
                <span className='text-secondary text-2xl font-normal font-rubik text-center px-56 leading-normal'>
                    In just small steps you’ll connected directly to our technology. Knowledge about your own-power, your rivals, your voters, and your region in Election.
                </span>
            </div>

            <div className='mt-24'>
                <h1 className='text-center text-4xl text-[#1E0E62] font-bold font-rubik mb-7 capitalize'>our advisior</h1>
                <div className='flex flex-wrap justify-center gap-10 mt-10'>
                    <div className='flex flex-col items-center gap-3'>
                        <img src="/images/xavier.jpeg" alt="..." className='w-[270px] h-[174px] object-cover rounded-lg mb-2' />
                        <h3 className='font-rubik text-xl text-primary font-medium capitalize'>xavier oswald</h3>
                        <h4 className='text-xs text-secondary font-bold font-rubik uppercase leading-6 tracking-widest'>co-founder, developer</h4>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <img src="/images/sara.jpeg" alt="..." className='w-[270px] h-[174px] object-cover rounded-lg mb-2' />
                        <h3 className='font-rubik text-xl text-primary font-medium capitalize'>Sara Creighton</h3>
                        <h4 className='text-xs text-secondary font-bold font-rubik uppercase leading-6 tracking-widest'>co-founder, developer</h4>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <img src="/images/brandon.jpeg" alt="..." className='w-[270px] h-[174px] object-cover rounded-lg mb-2' />
                        <h3 className='font-rubik text-xl text-primary font-medium capitalize'>Brandon Ogden</h3>
                        <h4 className='text-xs text-secondary font-bold font-rubik uppercase leading-6 tracking-widest'>Project manager</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advisior;