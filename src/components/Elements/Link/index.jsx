import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkSideBar = (props) => {
    const { children, name, to } = props;
    return (
        <NavLink
            to={to}
            className="flex items-center gap-4 group"
            style={({ isActive }) => ({
                color: isActive ? 'white' : '#A6B0CF',
            })}
        >
            {children}
            <span className="text-sm font-normal font-rubik capitalize tracking-widest group-hover:text-white transition">
                {name}
            </span>
        </NavLink>
    );
};

export default LinkSideBar;
