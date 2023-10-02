import React from 'react';
import { Link } from 'react-router-dom';
import { RiDashboard2Fill } from 'react-icons/ri';
import LinkSideBar from '../../Elements/Link';

import {
    DataSideLink,
    AssetSideLink,
    AuthSideLink,
} from '../../../constant/navigations';

const Sidebar = () => {
    return (
        <aside className="bg-[#2A3042] max-w-[288px] w-full block fixed top-0 bottom-0 overflow-y-auto">
            <nav className="p-6">
                <Link to="/">
                    <img
                        src="/images/Logo-white.svg"
                        alt="logo"
                        className="w-40"
                    />
                </Link>

                <div className="mt-10 p-4">
                    <LinkSideBar name="dashboard" to="/admin/dashboard">
                        <RiDashboard2Fill className="text-xl" />
                    </LinkSideBar>

                    <div className="mt-8">
                        <h3 className="text-[#6A7187] text-sm font-semibold font-rubik uppercase tracking-widest">
                            data
                        </h3>

                        <div className="mt-6 flex flex-col gap-6">
                            {DataSideLink.map((item, index) => (
                                <LinkSideBar
                                    key={index}
                                    name={item.item}
                                    to={`/admin/${item.item.replace(
                                        /\s+/g,
                                        '-'
                                    )}`}
                                >
                                    {item.icon}
                                </LinkSideBar>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-[#6A7187] text-sm font-semibold font-rubik uppercase tracking-widest">
                            assets
                        </h3>

                        <div className="mt-6 flex flex-col gap-6">
                            {AssetSideLink.map((item, index) => (
                                <LinkSideBar
                                    key={index}
                                    name={item.item}
                                    to={item.item.replace(/\s+/g, '-')}
                                >
                                    {item.icon}
                                </LinkSideBar>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-[#6A7187] text-sm font-semibold font-rubik uppercase tracking-widest">
                            authorization
                        </h3>

                        <div className="mt-6 flex flex-col gap-6">
                            {AuthSideLink.map((item, index) => (
                                <LinkSideBar
                                    key={index}
                                    name={item.item}
                                    to={item.item.replace(/\s+/g, '-')}
                                >
                                    {item.icon}
                                </LinkSideBar>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;
