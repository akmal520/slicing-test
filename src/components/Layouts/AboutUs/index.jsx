import React from 'react';
import Subscribe from '../Home/Subscribe';
import Footer from '../Footer';
import HeaderABoutUs from './Header';
import Advisior from './Advisior';
import Testimonial from './Testimonial';

const AboutUsLayout = () => {
    return (
        <>
            <HeaderABoutUs />
            <Advisior />
            <Testimonial />
            <Subscribe />
            <Footer />
        </>
    );
};

export default AboutUsLayout;