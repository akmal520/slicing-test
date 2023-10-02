import React from 'react';
import Button from '../../Elements/Button';

const Overview = () => {
    return (
        <section className="py-12 mt-32 bg-[#2161D5] relative z-50">
            <div id="shape">
                <img
                    src="/images/shape_dot.svg"
                    alt="..."
                    className="absolute top-5 right-3"
                />
            </div>

            <header className="container mx-auto ">
                <div className="relative">
                    <div className="mb-20">
                        <img
                            src="/images/shape_1.svg"
                            alt="..."
                            className="w-[413px] h-[555px]"
                        />
                        <div className="absolute -top-[110px] left-40 flex items-end gap-20">
                            <img
                                src="/images/overview_1.png"
                                alt="..."
                                className="w-[345px] h-[440px] object-cover rounded-[20px]"
                            />
                            <div className="flex flex-col">
                                <h1 className="text-white text-4xl font-medium font-rubik capitalize mb-4">
                                    app overview 1
                                </h1>
                                <p className="text-white text-base font-normal w-[440px] mb-5">
                                    Advanced spatial analysis to understand
                                    where and why things happen, identify the
                                    target constituency, and optimize the
                                    campaign.
                                </p>
                                <Button styling="w-[153px] h-[46px] border border-white text-center text-white text-base font-medium font-rubik rounded-full shadow-xl capitalize">
                                    learn more
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <div className="flex items-end justify-between gap-10">
                            <div className="flex flex-col ml-[124px]">
                                <h1 className="text-white text-4xl font-medium font-rubik capitalize mb-4">
                                    app overview 2
                                </h1>
                                <p className="text-white text-base font-normal w-[440px] mb-5">
                                    Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint. Velit officia
                                    consequat duis enim velit mollit.
                                    Exercitation veniam consequat sunt nostrud
                                    amet.
                                </p>
                                <Button styling="w-[153px] h-[46px] border border-white text-center text-white text-base font-medium font-rubik rounded-full shadow-xl capitalize">
                                    learn more
                                </Button>
                            </div>

                            <div className="relative">
                                <img
                                    src="/images/overview_2.svg"
                                    alt="..."
                                    className="z-20"
                                />
                                <img
                                    src="/images/shape_2.svg"
                                    alt="..."
                                    className=" absolute -top-[8rem] -right-14 -z-10"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="py-44">
                        <div className="flex items-end">
                            <div className="relative">
                                <img
                                    src="/images/overview_3.svg"
                                    alt="..."
                                    className="z-20"
                                />
                                <img
                                    src="/images/shape_3.svg"
                                    alt="..."
                                    className=" absolute -top-24 left-0 -z-10"
                                />
                            </div>

                            <div className="flex flex-col ml-14">
                                <h1 className="text-white text-4xl font-medium font-rubik capitalize mb-4">
                                    app overview 3
                                </h1>
                                <p className="text-white text-base font-normal w-[440px] mb-5">
                                    Advanced spatial analysis to understand
                                    where and why things happen, identify the
                                    target constituency, and optimize the
                                    campaign.
                                </p>
                                <Button styling="w-[153px] h-[46px] border border-white text-center text-white text-base font-medium font-rubik rounded-full shadow-xl capitalize">
                                    learn more
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Overview;
