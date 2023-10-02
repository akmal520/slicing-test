import React from 'react';
import Button from '../components/Elements/Button';
import Navbar from '../components/Layouts/Navbar/Navbar';

const ErrorPage = () => {
    return (
        <>
            <Navbar />

            <div className="container w-full h-screen flex items-center justify-between">
                <div className="w-[294px] ml-[93px]">
                    <div className="mb-4 font-rubik text-2xl font-medium text-primary capitalize">
                        <h3 className="mb-2">ooops!</h3>
                        <h3>Page not found</h3>
                    </div>
                    <p className="text-secondary text-base font-rubik mb-5">
                        This page doesn`t exist or was removed We suggest you
                        back to home
                    </p>
                    <Button styling="w-[153px] h-[48px] bg-[#2161D5] text-center text-white text-base font-medium font-rubik rounded-full shadow-xl capitalize hover:bg-[#205ac7] transition">
                        learn more
                    </Button>
                </div>

                <div>
                    <img src="/images/404.svg" className="w-[602px]" />
                </div>
            </div>
        </>
    );
};

export default ErrorPage;
