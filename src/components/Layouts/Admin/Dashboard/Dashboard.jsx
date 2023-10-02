import React from 'react';
import Sidebar from '../../Sidebar';
import NavAdminLayouts from '../Nav';

import { Breadcrumbs } from '@material-tailwind/react';
import { FiChevronRight } from 'react-icons/fi';
import { GrHomeRounded } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Chart from '../../../Fragments/Chart';

const DashboardLayout = (props) => {
    const { username, img } = props;
    return (
        <section className="overflow-x-hidden flex bg-[#F5F6FA]">
            <Sidebar />
            <section className="overflow-y-auto w-full ml-72 mb-10">
                <NavAdminLayouts username={username} img={img} />
                <div className="px-3">
                    <Breadcrumbs
                        separator={
                            <FiChevronRight
                                className="h-4 w-4 text-gray-500 mr-1"
                                strokeWidth={3}
                            />
                        }
                        className="bg-[#F5F6FA] py-8"
                    >
                        <Link to="#" className="font-medium text-gray-600 mr-2">
                            <GrHomeRounded className=" h-4 w-4" />
                        </Link>
                        <Link
                            to="#"
                            className="font-medium font-rubik text-gray-600 capitalize mr-2"
                        >
                            statistik
                        </Link>
                        <Link
                            to="#"
                            className="font-normal font-rubik text-gray-500 capitalize mr-2"
                        >
                            wilayah
                        </Link>
                    </Breadcrumbs>
                    <div className="">
                        <Chart />
                    </div>
                </div>
            </section>
        </section>
    );
};

export default DashboardLayout;
