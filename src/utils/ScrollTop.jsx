import React, { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';

const ScrollTop = () => {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="relative">
            {showButton && (
                <FaAngleUp
                    onClick={scrollToTop}
                    className="fixed bottom-10 right-6 z-[99] bg-[#2161D5] border border-white rounded-full h-12 w-12 text-white cursor-pointer hover:bg-[#205ac7] transition"
                />
            )}
        </div>
    );
};

export default ScrollTop;
