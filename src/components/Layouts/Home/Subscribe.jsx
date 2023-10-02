import React from 'react';
import Button from '../../Elements/Button';

const Subscribe = () => {
    return (
        <section className="container mx-auto py-10 my-24">
            <div className="bg-[#2161D5] flex flex-row items-center justify-between px-[70px] py-20 rounded-xl">
                <div className="w-[380px]">
                    <h3 className="text-4xl font-medium font-rubik text-white leading-[45px] capitalize mb-5">
                        Subscribe Now for Get Special Features!
                    </h3>
                    <span className="text-white text-base font-normal font-rubik">
                        Let's subscribe with us and find the fun.
                    </span>
                </div>
                <Button
                    type="button"
                    styling="text-[#2161D5] bg-white font-bold rounded-[10px] text-base px-14 py-5 inline-flex justify-center text-center capitalize font-rubik hover:shadow-2xl hover:shadow-white/30 transition"
                >
                    subscribe now
                </Button>
            </div>
        </section>
    );
};

export default Subscribe;
