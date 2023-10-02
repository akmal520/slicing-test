import { Breadcrumbs, Button, Avatar, Spinner } from '@material-tailwind/react';
import React, { useState } from 'react';
import { FiChevronRight, FiChevronLeft, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Sidebar from '../../Sidebar';
import NavAdminLayouts from '../Nav';
import { getAllUsers, searchUser } from '../../../../services/users.service';
import { useEffect } from 'react';
import TableUser from './TableUser';
import AddUser from './AddUser';

const UserManagement = (props) => {
    const { username, img } = props;
    const [users, setUsers] = useState([]);
    const [data, setData] = useState([0, 5]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchInput, setSearchInput] = useState('');
    const page = [];
    for (let i = 1; i <= Math.ceil(users.length / 5); i++) {
        page.push(
            <div
                key={i}
                className={
                    i === currentPage
                        ? 'bg-[#2161D5] text-white px-2 py-1 shadow-none hover:shadow-none rounded-md text-xs cursor-default'
                        : 'bg-[#F5F6FA] text-primary px-2 py-1 shadow-none hover:shadow-none rounded-md text-xs cursor-default'
                }
            >
                {i}
            </div>
        );
    }

    useEffect(() => {
        getAllUsers((data) => {
            setUsers(data);
        });
    }, []);

    const handleNext = () => {
        setCurrentPage((prev) => prev + 1);
        setData((prev) => [prev[0] + 5, prev[1] + 5]);
    };

    const handlePrevious = () => {
        setCurrentPage((prev) => prev - 1);
        setData((prev) => [prev[0] - 5, prev[1] - 5]);
    };

    const handleSearch = (event) => {
        const { value } = event.target;
        if (value !== '' && value.length > 2) {
            setSearchInput(value);
            searchUser(value, (data) => {
                setUsers(data);
                setCurrentPage(1);
                setData([0, 5]);
            });
        } else {
            setSearchInput('');
            getAllUsers((data) => {
                setUsers(data);
                setCurrentPage(1);
                setData([0, 5]);
            });
        }
    };

    return (
        <section className="overflow-x-hidden flex bg-[#F5F6FA]">
            <Sidebar />
            <main className="overflow-y-auto w-full ml-72 mb-10">
                <NavAdminLayouts username={username} img={img} />
                <div className=" px-6">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl text-primary font-rubik font-bold uppercase">
                            User Management
                        </h1>
                        <Breadcrumbs
                            separator={
                                <FiChevronRight
                                    className="h-4 w-4 text-gray-500 mr-1"
                                    strokeWidth={3}
                                />
                            }
                            className="bg-[#F5F6FA] py-8"
                        >
                            <Link
                                to="#"
                                className="font-medium font-rubik text-gray-600 capitalize mr-2"
                            >
                                Logoipsum
                            </Link>
                            <Link
                                to="#"
                                className="font-medium font-rubik text-gray-600 capitalize mr-2"
                            >
                                Usermanagement
                            </Link>
                        </Breadcrumbs>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <label
                                htmlFor="default-search"
                                className="mb-2 text-sm font-medium text-gray-900 sr-only"
                            >
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <FiSearch className="w-4 h-4 text-gray-500" />
                                </div>
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-[250px] h-10 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Search User"
                                    onChange={handleSearch}
                                />
                            </div>
                        </div>

                        <AddUser />
                    </div>

                    <div className="mt-4">
                        <TableUser searchInput={searchInput} users={users} data={data} />
                    </div>

                    <div className="flex justify-between items-center gap-5 mt-4">
                        <p className="text-sm text-gray-600 font-rubik">
                            Showing {users.length === 0 ? '0' : data[1]} of {users.length} User
                        </p>
                        <div className="flex justify-center items-center gap-5">
                            <Button
                                className="bg-[#F5F6FA] text-primary p-0 shadow-none hover:shadow-none"
                                disabled={currentPage <= 1 ? true : false}
                                onClick={handlePrevious}
                            >
                                <FiChevronLeft className="text-xl" />
                            </Button>
                            <div className="flex items-center gap-4">
                                {page}
                            </div>
                            <Button
                                className="bg-[#F5F6FA] text-primary p-0 shadow-none hover:shadow-none"
                                disabled={
                                    currentPage >= Math.ceil(users.length / 5)
                                        ? true
                                        : false
                                }
                                onClick={handleNext}
                            >
                                <FiChevronRight className="text-xl" />
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default UserManagement;
