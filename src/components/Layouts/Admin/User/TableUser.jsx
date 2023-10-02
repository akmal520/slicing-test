import { Avatar } from '@material-tailwind/react';
import React from 'react';
import EditUser from './EditUser';

const TableUser = (props) => {
    const { users, searchInput, data } = props;
    // console.log(users);
    const TABLE_HEAD = [
        'Name',
        'Username',
        'Email',
        'Password',
        'Gender',
        'Action',
    ];

    return (
        <table className="w-full min-w-max table-auto text-left border-separate border-spacing-y-3">
            <thead className="text-sm text-gray-700 font-rubik capitalize bg-white">
                <tr>
                    {TABLE_HEAD.map((item) => (
                        <th
                            key={item}
                            className="px-6 py-3 text-left font-medium text-gray-900 tracking-wider"
                        >
                            {item}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="mt-4">
                {searchInput.length > 2
                    ? users.slice(data[0], data[1]).map((item) => {
                        return (
                            <tr key={item.id} className="bg-white">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    <Avatar
                                        variant="circular"
                                        size="sm"
                                        alt="tania andrew"
                                        className="border border-gray-900 p-0.5 w-8 h-8 mr-2"
                                        src={item.image}
                                    />
                                    {item.firstName} {item.lastName}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {item.username}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {item.email}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {item.password}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {item.gender}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    <EditUser id={item.id} />
                                </td>
                            </tr>
                        );
                    })
                    : users.slice(data[0], data[1]).map((item) => {
                        return (
                            <tr key={item.id} className="bg-white">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    <Avatar
                                        variant="circular"
                                        size="sm"
                                        alt="tania andrew"
                                        className="border border-gray-900 p-0.5 w-8 h-8 mr-2"
                                        src={item.image}
                                    />
                                    {item.firstName} {item.lastName}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {item.username}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {item.email}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {item.password}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {item.gender}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    <EditUser id={item.id} />
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
};

export default TableUser;
