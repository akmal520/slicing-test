import React from 'react';
import Footer from '../Footer';
import HeaderHome from './HeaderHome';
import WhyChoose from './WhyChoose';
import Overview from './Overview';
import Works from './Works';
import PlanPricing from './PlanPricing';
import Faq from './Faq';
import Subscribe from './Subscribe';
import ScrollTop from '../../../utils/ScrollTop';
import Navbar from '../Navbar/Navbar';

const HomeLayout = () => {
    return (
        <>
            <ScrollTop />
            <Navbar />
            <HeaderHome />
            <WhyChoose />
            <Overview />
            <Works />
            <PlanPricing />
            <Faq />
            <Subscribe />
            <Footer />
        </>
    );
};

export default HomeLayout;
