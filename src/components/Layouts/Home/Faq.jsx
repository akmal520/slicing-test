import {
    Accordion,
    AccordionBody,
    AccordionHeader,
} from '@material-tailwind/react';
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { accordionData } from '../../../constant/content';
import Button from '../../Elements/Button';

const Faq = () => {
    const [openAccordion, setOpenAccordion] = useState(1);
    const handleOpenAccordion = (value) =>
        setOpenAccordion(openAccordion === value ? 0 : value);
    return (
        <section className="container mx-auto py-10 flex flex-col items-center my-24">
            <div className="w-[754px] flex flex-col items-center">
                <h3 className="text-4xl font-bold font-rubik text-primary capitalize mb-10">
                    Frequently Asked Questions
                </h3>

                <div className="mb-7">
                    {accordionData.map((item, index) => {
                        const id = index + 1;
                        return (
                            <Accordion
                                key={id}
                                open={openAccordion === id}
                                icon={
                                    openAccordion === id ? (
                                        <AiOutlineMinus className="w-6 h-6" />
                                    ) : (
                                        <AiOutlinePlus className="w-6 h-6" />
                                    )
                                }
                                className="mb-5 rounded-lg border-[2px] border-[#E9EBF0] px-10"
                            >
                                <AccordionHeader
                                    onClick={() => handleOpenAccordion(id)}
                                    className={`border-b-0 text-base text-primary font-medium font-rubik transition-colors ${
                                        openAccordion === id
                                            ? 'text-blue-500 hover:!text-blue-700'
                                            : ''
                                    }`}
                                >
                                    {item.ask}
                                </AccordionHeader>
                                <AccordionBody className="pt-0 text-base text-secondary font-normal font-rubik w-[646px]">
                                    {item.answer}
                                </AccordionBody>
                            </Accordion>
                        );
                    })}
                </div>

                <Button
                    type="button"
                    styling="text-blue-600 bg-white hover:bg-blue-700 hover:text-white font-medium rounded-full text-base px-8 py-3 inline-flex justify-center text-center capitalize font-rubik border border-blue-600"
                >
                    add question
                </Button>
            </div>
        </section>
    );
};

export default Faq;
