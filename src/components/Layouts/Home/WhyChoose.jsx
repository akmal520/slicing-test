import React from 'react';
import { chooseUs } from '../../../constant/content';
import Button from '../../Elements/Button';

const WhyChoose = () => {
    return (
        <section className="container mx-auto py-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold font-rubik text-primary mb-5">
                    Why choose us?
                </h2>
                <p className="text-secondary text-base font-normal font-rubik px-80 leading-8">
                    We provide to you the best choiches for you. The leading
                    political campaign intelligence platform
                </p>
            </div>

            <div className="flex flex-row gap-10 justify-center mb-11">
                {chooseUs.map((item) => (
                    <div
                        key={item.title}
                        className="w-[316px] h-[321px] flex flex-col pt-12 items-start gap-2 rounded-[20px] pl-8 bg-white border-[2px] border-[#DDDDDD] cursor-default hover:border-[#2161D5] hover:shadow-2xl hover:scale-105 transition"
                    >
                        <img
                            src={item.image}
                            alt="..."
                            className="w-[70px] h-[70px]"
                        />

                        <div>
                            <h4 className="text-primary text-2xl font-medium font-rubik leading-[56px] capitalize">
                                {item.title}
                            </h4>
                            <p className="text-secondary text-base font-normal font-rubik leading-7">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center">
                <Button styling="w-[200px] h-[56px] bg-white text-center text-[#2161D5] text-base font-medium font-rubik border border-[#2161D5] rounded-full shadow-xl capitalize hover:bg-[#2161D5] hover:text-white transition">
                    learn more
                </Button>
            </div>
        </section>
    );
};

export default WhyChoose;
