import React from 'react';
import Button from '../../Elements/Button';

const HeaderHome = () => {
    return (
        <header className="container mx-auto flex items-center justify-between py-8 mb-36">
            <div>
                <h1 className="text-primary text-6xl font-medium font-rubik w-96  leading-[70px] not-italic">
                    Observe Your <span className="font-bold">Power</span>
                </h1>
                <p className="text-secondary text-base font-normal font-rubik leading-[32px] w-[541px] mt-5">
                    Trafalgar provides progressive, and affordable healthcare,
                    accessible on mobile and online for everyone
                </p>

                <Button styling="py-[15px] px-[50px] bg-[#2161D5] text-center text-white text-base font-medium font-rubik rounded-full mt-10 shadow-[28px_16px_14px_rgba(0,0,0,0.2)] hover:bg-[#205ac7] hover:bg-[#205ac7] transition">
                    See a Demo
                </Button>
            </div>

            <img
                src="/images/header_home.svg"
                className="w-[460px] h-auto"
                alt="..."
            />
        </header>
    );
};

export default HeaderHome;
