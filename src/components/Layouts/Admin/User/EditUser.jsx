import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    Input,
    Menu,
    MenuHandler,
    MenuItem,
    MenuList,
    Option,
    Select,
    Typography,
} from '@material-tailwind/react';
import React, { useState } from 'react';
import { BiDotsHorizontalRounded, BiPencil, BiTrash } from 'react-icons/bi';
import { deleteUser, updateUser } from '../../../../services/users.service';

const EditUser = (props) => {
    const { id } = props;
    const [openDialog, setOpenDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [dataChange, setDataChange] = useState({});

    const handleOpenDialog = () => setOpenDialog((prev) => !prev);
    const handleOpenDeleteDialog = () => setOpenDeleteDialog((prev) => !prev);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDataChange((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleChangeSelect = (event) => {
        setDataChange((prev) => ({
            ...prev,
            gender: event,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateUser(id, dataChange, (data) => {
            handleOpenDialog();
        });
    };

    const handleDelete = () => {
        deleteUser(id, (data) => {
            handleOpenDeleteDialog();
            // console.log(data);
        });

    };

    return (
        <>
            <Menu>
                <MenuHandler>
                    <Button variant="text">
                        <BiDotsHorizontalRounded className="text-xl" />
                    </Button>
                </MenuHandler>
                <MenuList
                >
                    <MenuItem
                        className="flex items-center gap-2"
                        onClick={handleOpenDialog}
                    >
                        <BiPencil /> Edit
                    </MenuItem>
                    <MenuItem
                        className="flex items-center gap-2"
                        onClick={handleOpenDeleteDialog}
                    >
                        <BiTrash /> Delete
                    </MenuItem>
                </MenuList>
            </Menu>
            <Dialog
                size="md"
                open={openDialog}
                handler={() => handleOpenDialog()}
                className="bg-white shadow-none "
            >
                <DialogBody className="flex flex-col justify-center px-12 py-8">
                    <Typography
                        variant="paragraph"
                        className="text-[#44566C] text-[22px] font-semibold font-rubik mb-2"
                    >
                        User Management
                    </Typography>
                    <Typography
                        variant="paragraph"
                        className="text-[#8697A8] text-[13px] font-normal font-rubik"
                    >
                        If you need more info, please check Project Guidelines.
                    </Typography>
                    <Card className="w-full" shadow={false}>
                        <CardBody className="px-0">
                            <form
                                className="flex flex-col gap-4"
                                onSubmit={handleSubmit}
                            >
                                <div>
                                    <Typography
                                        variant="paragraph"
                                        className="text-sm text=[#44566C] font-medium font-rubik mb-2"
                                    >
                                        First Name
                                        <span className="text-red-600">*</span>
                                    </Typography>
                                    <Input
                                        name="firstName"
                                        type="text"
                                        placeholder="Input Name"
                                        size="lg"
                                        className="!border !border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:!border-[#2161D5] focus:!border-t-[#2161D5] focus:ring-0"
                                        labelProps={{
                                            className: 'hidden',
                                        }}
                                        required
                                        color="blue"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <Typography
                                        variant="paragraph"
                                        className="text-sm text=[#44566C] font-medium font-rubik mb-2"
                                    >
                                        Last Name
                                        <span className="text-red-600">*</span>
                                    </Typography>
                                    <Input
                                        name="lastName"
                                        type="text"
                                        placeholder="Input Name"
                                        size="lg"
                                        className="!border !border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:!border-[#2161D5] focus:!border-t-[#2161D5] focus:ring-0"
                                        labelProps={{
                                            className: 'hidden',
                                        }}
                                        required
                                        color="blue"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <Typography
                                        variant="paragraph"
                                        className="text-sm text=[#44566C] font-medium font-rubik mb-2"
                                    >
                                        Username
                                        <span className="text-red-600">*</span>
                                    </Typography>
                                    <Input
                                        name="username"
                                        type="text"
                                        placeholder="Input Username"
                                        size="lg"
                                        className="!border !border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:!border-[#2161D5] focus:!border-t-[#2161D5] focus:ring-0"
                                        labelProps={{
                                            className: 'hidden',
                                        }}
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <Typography
                                        variant="paragraph"
                                        className="text-sm text=[#44566C] font-medium font-rubik mb-2"
                                    >
                                        Email
                                        <span className="text-red-600">*</span>
                                    </Typography>
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="Input Email"
                                        size="lg"
                                        className="!border !border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:!border-[#2161D5] focus:!border-t-[#2161D5] focus:ring-0"
                                        labelProps={{
                                            className: 'hidden',
                                        }}
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <Typography
                                        variant="paragraph"
                                        className="text-sm text=[#44566C] font-medium font-rubik mb-2"
                                    >
                                        Gender
                                        <span className="text-red-600">*</span>
                                    </Typography>
                                    <Select
                                        labelProps={{
                                            className: 'hidden',
                                        }}
                                        className="!border !border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:!border-[#2161D5] focus:!border-t-[#2161D5] focus:ring-0"
                                        onChange={handleChangeSelect}
                                    >
                                        <Option value="male">Male</Option>
                                        <Option value="female">Female</Option>
                                    </Select>
                                </div>
                                <CardFooter className="flex gap-4 items-center justify-end mt-4 p-0">
                                    <Button
                                        variant="text"
                                        className="capitalize text-[#44566C] !text-xs !font-semibold !font-rubik tracking-widest"
                                        onClick={() => handleOpenDialog()}
                                        type="button"
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        color="blue"
                                        className="capitalize text-white !text-xs !font-semibold !font-rubik tracking-widest"
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                </CardFooter>
                            </form>
                        </CardBody>
                    </Card>
                </DialogBody>
            </Dialog>

            <Dialog open={openDeleteDialog} handler={handleOpenDeleteDialog}>
                <DialogHeader>Delete User?</DialogHeader>
                <DialogBody divider>
                    <Typography variant="paragraph">
                        Are you sure you want to delete this user?
                    </Typography>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpenDeleteDialog}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleDelete}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
};

export default EditUser;
