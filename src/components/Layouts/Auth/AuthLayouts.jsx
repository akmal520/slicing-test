import React from 'react';
import { Link } from 'react-router-dom';

const AuthLayouts = (props) => {
    const { children, type } = props;
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="flex">
            <div className="w-2/5 h-full bg-[#F5F6FA]">
                <Link to="/">
                    <img
                        src="/images/Logo.svg"
                        alt="logo"
                        className="px-14 py-11"
                    />
                </Link>

                <div className="flex flex-col items-center justify-center">
                    <img
                        src="/images/login_undraw_pie_chart.svg"
                        className="w-[414px] pt-8"
                    />
                    <div className="w-[424px] text-center mt-16 px-2">
                        <h3 className="text-2xl font-semibold capitalize not-italic text-primary font-rubik">
                            services
                        </h3>
                        <p className="pt-2 text-secondary text-base not-italic font-normal">
                            An expert team help you to analyze your polticalt
                            power.An expert team .
                        </p>
                    </div>
                </div>
                <footer className="px-12 py-11 mt-20">
                    <p className="capitalize text-secondary text-sm font-inter not-italic font-normal">
                        ©{year} all rights reserved. PT indonesia indicator
                    </p>
                </footer>
            </div>

            <div className="w-3/5 h-screen flex items-center justify-center">
                <div className="flex flex-col w-[463px]">
                    <h1 className="text-3xl font-bold font-inter text-primary">
                        Welcome to Logo ipsum
                    </h1>

                    <NavigationAuth type={type} />

                    {children}
                </div>
            </div>
        </div>
    );
};

const NavigationAuth = ({ type }) => {
    if (type === 'login') {
        return (
            <div className="text-left flex pt-2 pb-10">
                <p className="text-[#444150] text-base not-italic font-normal font-rubik mr-2">
                    Don't have an account?
                </p>
                <Link
                    to={'/register'}
                    className="text-[#2161D5] text-base font-semibold font-rubik capitalize"
                >
                    sign up
                </Link>
            </div>
        );
    } else {
        return (
            <div className="text-left flex pt-2 pb-10">
                <p className="text-[#444150] text-base not-italic font-normal font-rubik mr-2">
                    Already have an account?
                </p>
                <Link
                    to={'/login'}
                    className="text-[#2161D5] text-base font-semibold font-rubik capitalize"
                >
                    sign in
                </Link>
            </div>
        );
    }
};

export default AuthLayouts;
