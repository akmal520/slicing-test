import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { navFooter } from '../../../constant/navigations';

const Footer = () => {
    return (
        <footer className="container mx-auto bg-white">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="images/logo_footer.svg"
                                className="h-8 mr-3"
                                alt="Logo"
                            />
                            <span className="self-center text-xl font-medium font-rubik whitespace-nowrap uppercase">
                                Geolabs
                            </span>
                        </Link>

                        <p className="w-[340px] text-secondary text-base font-normal font-rubik leading-7 mt-6">
                            <span className="font-medium">Geolabs</span> is a
                            private virtual network that has unique features and
                            has high security.
                        </p>

                        <div className="flex items-center gap-5 mt-8">
                            <Link
                                to="#"
                                className="drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)] group"
                            >
                                <FaFacebookF className="text-[#2161D5] h-7 w-7 p-1 bg-white rounded-full group-hover:scale-105 transition" />
                            </Link>
                            <Link
                                to="#"
                                className="drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)] group"
                            >
                                <FaTwitter className="text-[#2161D5] h-7 w-7 p-1 bg-white rounded-full group-hover:scale-105 transition" />
                            </Link>
                            <Link
                                to="#"
                                className="drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)] group"
                            >
                                <FaInstagram className="text-[#2161D5] h-7 w-7 p-1 bg-white rounded-full group-hover:scale-105 transition" />
                            </Link>
                        </div>

                        <p className="text-[#AFB5C0] text-base font-normal font-rubik mt-8">
                            &copy;2023
                            <span className="font-medium uppercase">
                                ebdesk
                            </span>
                        </p>
                    </div>

                    <div className="grid gap-16 grid-cols-3">
                        {navFooter.map(({ title, items }, key) => (
                            <div key={key}>
                                <h2 className="mb-6 text-[18px] text-primary font-semibold font-rubik capitalize">
                                    {title}
                                </h2>
                                <ul className="text-secondary text-base font-normal font-rubik">
                                    {items.map((item, key) => {
                                        const link = item.replace(/\s+/g, '-');
                                        return (
                                            <li
                                                key={key}
                                                className="mb-4 capitalize"
                                            >
                                                <Link
                                                    to={`/${link}`}
                                                    className="hover:underline"
                                                >
                                                    {item}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
