import React from 'react';
import { BsCheckLg, BsXLg } from 'react-icons/bs';
import Button from '../../Elements/Button';

const PlanPricing = () => {
    return (
        <section className="container mx-auto py-24">
            <div className="flex flex-col items-center justify-center text-center gap-5">
                <h1 className="text-center text-4xl font-bold font-rubik text-primary">
                    Plans and Pricing
                </h1>
                <p className="text-secondary text-base font-normal font-rubik px-80 leading-8">
                    We provide to you the best choiches for you. The leading
                    political campaign intelligence platform
                </p>
            </div>

            <div className="grid grid-cols-2 justify-items-center gap-10 px-32 mt-20">
                <div className="px-16 py-12 bg-white border-[2px] border-gray-200 rounded-lg shadow text-center flex flex-col items-center hover:border-blue-600 hover:shadow-2xl hover:scale-105 transition">
                    <div className="flex flex-col items-center justify-center">
                        <img
                            src="/images/plans.svg"
                            alt="..."
                            className="w-[114px] h-[135px] mb-1 p-3"
                        />
                        <h5 className="mb-2 text-lg font-medium font-rubik text-primary capitalize">
                            individual plan
                        </h5>
                    </div>

                    <ul role="list" className="space-y-5 my-7 mb-14">
                        <li className="flex space-x-3 items-center">
                            <BsCheckLg className="flex-shrink-0 w-6 h-w-6 text-lg text-[#2FAB73]" />
                            <span className="text-base font-normal leading-tight text-gray-500 capitalize">
                                1 user
                            </span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsCheckLg className="flex-shrink-0 w-6 h-w-6 text-lg text-[#2FAB73]" />
                            <span className="text-base font-normal leading-tight text-gray-500 capitalize">
                                1 basic analysis
                            </span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsCheckLg className="flex-shrink-0 w-6 h-w-6 text-lg text-[#2FAB73]" />
                            <span className="text-base font-normal leading-tight text-gray-500 capitalize">
                                unlimted select services
                            </span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsXLg className="flex-shrink-0 w-6 h-w-6 text-lg text-red-600" />
                            <span className="text-base font-normal leading-tight text-gray-500 capitalize">
                                free exteend 1 month
                            </span>
                        </li>
                    </ul>

                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-baseline text-primary font-rubik mb-5">
                            <span className="text-2xl font-medium">$99</span>
                            <span className="ml-1 text-2xl font-normal text-gray-500">
                                / mo
                            </span>
                        </div>
                        <Button
                            type="button"
                            styling="text-blue-600 bg-white hover:bg-blue-700 hover:text-white font-medium rounded-full text-base px-12 py-2.5 inline-flex justify-center text-center capitalize font-rubik border border-blue-600"
                        >
                            select
                        </Button>
                    </div>
                </div>

                <div className="px-16 py-12 bg-white border-[2px] border-gray-200 rounded-lg shadow text-center flex flex-col items-center hover:border-blue-600 hover:shadow-2xl hover:scale-105 transition">
                    <div className="flex flex-col items-center justify-center">
                        <img
                            src="/images/plans.svg"
                            alt="..."
                            className="w-[114px] h-[135px] mb-1 p-3"
                        />
                        <h5 className="mb-2 text-lg font-medium font-rubik text-primary capitalize">
                            parties plan
                        </h5>
                    </div>

                    <ul role="list" className="space-y-5 my-7 mb-14">
                        <li className="flex space-x-3 items-center">
                            <BsCheckLg className="flex-shrink-0 w-6 h-w-6 text-lg text-[#2FAB73]" />
                            <span className="text-base font-normal leading-tight text-gray-500 capitalize">
                                1 user
                            </span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsCheckLg className="flex-shrink-0 w-6 h-w-6 text-lg text-[#2FAB73]" />
                            <span className="text-base font-normal leading-tight text-gray-500 capitalize">
                                1 basic analysis
                            </span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsCheckLg className="flex-shrink-0 w-6 h-w-6 text-lg text-[#2FAB73]" />
                            <span className="text-base font-normal leading-tight text-gray-500 capitalize">
                                unlimted select services
                            </span>
                        </li>
                        <li className="flex space-x-3 items-center">
                            <BsCheckLg className="flex-shrink-0 w-6 h-w-6 text-lg text-[#2FAB73]" />
                            <span className="text-base font-normal leading-tight text-gray-500 capitalize">
                                free exteend 1 month
                            </span>
                        </li>
                    </ul>

                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-baseline text-primary font-rubik mb-5">
                            <span className="text-2xl font-medium">$500</span>
                            <span className="ml-1 text-2xl font-normal text-gray-500">
                                / mo
                            </span>
                        </div>
                        <Button
                            type="button"
                            styling="text-blue-600 bg-white hover:bg-blue-700 hover:text-white font-medium rounded-full text-base px-12 py-2.5 inline-flex justify-center text-center capitalize font-rubik border border-blue-600"
                        >
                            select
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlanPricing;
