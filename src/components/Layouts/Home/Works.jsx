import React from 'react';
import { worksData } from '../../../constant/content';
import Button from '../../Elements/Button';

const Works = () => {
    return (
        <section className="container mx-auto py-24">
            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-5">
                    <h1 className="text-center text-4xl font-bold font-rubik text-primary">
                        How it works for you?
                    </h1>
                    <p className="text-secondary text-base text-center font-normal font-rubik px-80 leading-8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                </div>

                <Button styling="w-[153px] h-[48px] bg-[#2161D5] text-center text-white text-base font-medium font-rubik rounded-full mt-10 shadow-[28px_16px_14px_rgba(0,0,0,0.2)] hover:bg-[#205ac7] hover:bg-[#205ac7] transition">
                    See a Demo
                </Button>
            </div>

            <div className="grid grid-cols-2 justify-items-center gap-10 px-32 items-center mt-20">
                {worksData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center gap-12 p-7 w-[384px] h-[448px] border border-[#E9EBF0] bg-white rounded-3xl cursor-default hover:scale-105 hover:shadow-xl transition"
                    >
                        <img src={item.img} alt="..." className="w-auto" />
                        <div className="flex flex-col gap-5 items-center text-center">
                            <h2 className="text-primary text-xl font-semibold font-rubik capitalize">
                                {item.title}
                            </h2>
                            <p className="text-secondary text-base font-normal font-rubik">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Works;
