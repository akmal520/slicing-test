import React from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';
import { BsMoon } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import { FaRegUserCircle } from 'react-icons/fa';
import { TbLogout2 } from 'react-icons/tb';

import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Typography,
    Button,
} from '@material-tailwind/react';
import { useState } from 'react';

const NavAdminLayouts = (props) => {
    const { username = '', img } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white">
            <button type="button">
                <HiMenuAlt2 className="text-xl w-6 h-6" />
            </button>

            <div className="flex items-center space-x-6">
                <button type="button">
                    <BsMoon className="text-xl w-5 h-5" />
                </button>

                <Menu
                    open={isMenuOpen}
                    handler={setIsMenuOpen}
                    placement="bottom-end"
                >
                    <MenuHandler>
                        <Button
                            variant="text"
                            color="blue-gray"
                            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5"
                        >
                            <Avatar
                                variant="circular"
                                size="sm"
                                alt="tania andrew"
                                className="border border-gray-900 p-0.5 w-8 h-8 mr-2"
                                src={img}
                            />
                            <Typography
                                variant="small"
                                className="font-normal mr-3"
                            >
                                {username}
                            </Typography>
                            <FiChevronDown
                                strokeWidth={3}
                                className={`h-3 w-3 transition-transform ${
                                    isMenuOpen ? 'rotate-180' : ''
                                }`}
                            />
                        </Button>
                    </MenuHandler>
                    <MenuList className="mt-4">
                        <MenuItem className="flex items-center gap-2">
                            <FaRegUserCircle
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-4 w-4"
                            />
                            <Typography variant="small" className="font-normal">
                                My Profile
                            </Typography>
                        </MenuItem>
                        <MenuItem className="flex items-center gap-2">
                            <TbLogout2
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-4 w-4"
                            />
                            <Typography
                                variant="small"
                                className="font-normal"
                                onClick={handleLogout}
                            >
                                Sign Out
                            </Typography>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </nav>
    );
};

export default NavAdminLayouts;
