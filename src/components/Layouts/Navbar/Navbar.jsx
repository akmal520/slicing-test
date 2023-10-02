import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navigations } from '../../../constant/navigations';

const Navbar = (props) => {
    const { text = 'text-primary hover:text-primary ', button = 'border-[#2161D5] text-[#2161D5] hover:bg-[#2161D5] hover:text-white', img = '/images/Logo.svg' } = props
    return (
        <nav className="container mx-auto flex justify-between items-center py-10">
            <Link to="/">
                <img
                    src={img}
                    alt="Logo"
                    className="pr-16 w-[196px]"
                />
            </Link>

            <ul className="flex flex-row gap-10">
                {navigations.map((item) => (
                    <li key={item.name}>
                        <NavLink
                            to={item.link}
                            style={({ isActive, isPending }) => {
                                return {
                                    fontWeight: isActive ? 'bold' : 'normal',
                                    color: isPending ? '#0B132A' : '#4F5665',
                                };
                            }}
                        >
                            <span className={`capitalize font-rubik text-base transition ${text}`}>
                                {item.name}
                            </span>
                        </NavLink>
                    </li>
                ))}
            </ul>

            <ul className="flex gap-[30px]">
                <li>
                    <Link
                        to="/login"
                        className={`${button} text-base font-semibold font-rubik capitalize`}
                    >
                        sign in
                    </Link>
                </li>
                <li>
                    <Link
                        to="/register"
                        className={`${button} text-base font-semibold font-rubik capitalize border  py-2.5 px-6 rounded-full  hover:cursor-pointer transition shadow-md`}
                    >
                        sign up
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
