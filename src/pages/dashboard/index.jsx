import DashboardBox from "./components/DashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { IoIosTimer } from "react-icons/io";
import Button from "@mui/material/Button";
import { HiDotsVertical } from "react-icons/hi";
import { Chart } from "react-google-charts";

import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import Pagination from '@mui/material/Pagination';

function Dashboard() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [showBy, setShowby] = useState('');
    const [catBy, setCatby] = useState('');

    const open = Boolean(anchorEl);
    const ITEM_HEIGHT = 48;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const data = [
        ["Task", "Hours per Day"],
        ["Work", 9],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
    ];

    var options = {
        'backgroundColor': 'transparent',
        'is3D': true,
        'chartArea': { 'width': '70%', 'height': '100%' }
    };

    return (
        <div>
            <div className="right-content w-full">
                <div className="dashboardWrapperBox flex">
                    <div className="w-4/6">
                        <div className="dashboardWrapper flex">
                            <DashboardBox color={['#1da256', '#48d483']} icon={<FaUserCircle />} grow={true} />
                            <DashboardBox color={['#c012e2', '#eb64fe']} icon={<IoCart />} />
                            <DashboardBox color={['#2c78e5', '#60aff5']} icon={<MdShoppingBag />} />
                            <DashboardBox color={['#e1950e', '#f3cd29']} icon={<GiStarsStack />} />
                        </div>
                    </div>
                    <div className="w-2/6">
                        <div className="box graphBox">
                            <div className="flex items-center justify-between month w-full">
                                <h6 className="text-white">Total Sales</h6>

                                {/* Replacing Button with span/div to prevent "button inside button" */}
                                <div onClick={handleClick} className="dot toggleIcon cursor-pointer">
                                    <HiDotsVertical />
                                </div>

                                {/* Dropdown Menu */}
                                <Menu
                                    id="long-menu"
                                    MenuListProps={{
                                        "aria-labelledby": "long-button",
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    slotProps={{
                                        paper: {
                                            style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: "20ch",
                                            },
                                        },
                                    }}
                                >
                                    {["Last Day", "Last Week", "Last Month", "Last Year"].map(
                                        (label, index) => (
                                            <MenuItem key={index} onClick={handleClose}>
                                                <IoIosTimer /> {label}
                                            </MenuItem>
                                        )
                                    )}
                                </Menu>
                            </div>
                            <h3 className="text-white font-bold text-2xl">$3,787,681.00</h3>
                            <p>$3,578.90 in last month</p>
                            <Chart
                                chartType="PieChart"
                                data={data}
                                options={options}

                            />
                        </div>
                    </div>
                </div>
                <div className="cart">
                    <h3 className="hd">Best Selling Products</h3>
                    <div className="w-full cardFilter flex">
                        <div className="w-1/4 col">
                            <h4>SHOW BY</h4>
                            <FormControl sx={{ m: 1, minWidth: '100%' }} size="small">
                                <Select
                                    className="w-full"
                                    value={showBy}
                                    onChange={(e) => setShowby(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>

                        </div>
                        <div className="w-1/4 col">
                            <h4>Category BY</h4>
                            <FormControl sx={{ m: 1, minWidth: '100%' }} size="small">
                                <Select
                                    className="w-full"
                                    value={catBy}
                                    onChange={(e) => setCatby(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className="">
                        <table className="table w-full ">
                            <thead className="">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        UID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        PRODUCT
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        CATEGORY
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        BRAND
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        PRICE
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        STOCK
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        RATING
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        ORDER
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        SALES
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        ACTION
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="">
                                    <td className="px-6 py-4">
                                        #1
                                    </td>
                                    <td scope="row" className="flex items-center">
                                        <div className="product-img">

                                        </div>
                                        <div className="info">
                                            <h6>Tops and skirt set for</h6>
                                            <p>Women's exclusive sum</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        Womans
                                    </td>
                                    <td className="px-6 py-4">
                                        richman
                                    </td>
                                    <td className="px-6 py-4">
                                        <del className="old block"> $21.00</del>
                                        <span className="new text-red-600 block"> $21.00</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        Silver
                                    </td>
                                    <td className="px-6 py-4">
                                        4.9(16)
                                    </td>
                                    <td className="px-6 py-4">
                                        380
                                    </td>
                                    <td className="px-6 py-4">
                                        $2999
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="actions flex items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><MdEdit /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="px-6 py-4">
                                        #2
                                    </td>
                                    <td scope="row" className="">
                                        Microsoft Surface Pro
                                    </td>
                                    <td className="px-6 py-4">
                                        Womans
                                    </td>
                                    <td className="px-6 py-4">
                                        richman
                                    </td>
                                    <td className="px-6 py-4">
                                        <del className="old block"> $21.00</del>
                                        <span className="new text-red-600 block"> $21.00</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        White
                                    </td>
                                    <td className="px-6 py-4">
                                        4.9(16)
                                    </td>
                                    <td className="px-6 py-4">
                                        380
                                    </td>
                                    <td className="px-6 py-4">
                                        $1999
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="actions flex items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><MdEdit /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="px-6 py-4">
                                        #3
                                    </td>
                                    <td scope="row" className="">
                                        Magic Mouse 2
                                    </td>
                                    <td className="px-6 py-4">
                                        Womans
                                    </td>
                                    <td className="px-6 py-4">
                                        richman
                                    </td>
                                    <td className="px-6 py-4">
                                        <del className="old block"> $21.00</del>
                                        <span className="new text-red-600 block"> $21.00</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        Black
                                    </td>
                                    <td className="px-6 py-4">
                                        4.9(16)
                                    </td>
                                    <td className="px-6 py-4">
                                        380
                                    </td>
                                    <td className="px-6 py-4">
                                        $99
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="actions flex items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><MdEdit /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="px-6 py-4">
                                        #4
                                    </td>
                                    <td scope="row" className="">
                                        Google Pixel Phone
                                    </td>
                                    <td className="px-6 py-4">
                                        Womans
                                    </td>
                                    <td className="px-6 py-4">
                                        richman
                                    </td>
                                    <td className="px-6 py-4">
                                        <del className="old block"> $21.00</del>
                                        <span className="new text-red-600 block"> $21.00</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        Gray
                                    </td>
                                    <td className="px-6 py-4">
                                        4.9(16)
                                    </td>
                                    <td className="px-6 py-4">
                                        380
                                    </td>
                                    <td className="px-6 py-4">
                                        $799
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="actions flex items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><MdEdit /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4">
                                        #6
                                    </td>
                                    <td scope="row" className="">
                                        Apple Watch 5
                                    </td>
                                    <td className="px-6 py-4">
                                        Womans
                                    </td>
                                    <td className="px-6 py-4">
                                        richman
                                    </td>
                                    <td className="px-6 py-4">
                                        <del className="old block"> $21.00</del>
                                        <span className="new text-red-600 block"> $21.00</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        Red
                                    </td>
                                    <td className="px-6 py-4">
                                        4.9(16)
                                    </td>
                                    <td className="px-6 py-4">
                                        380
                                    </td>
                                    <td className="px-6 py-4">
                                        $999
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="actions flex items-center">
                                            <Button className="secondary" color="secondary"><FaEye /></Button>
                                            <Button className="success" color="success"><MdEdit /></Button>
                                            <Button className="error" color="error"><MdDelete /></Button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex tableFooter">
                            <p>showing <b>12</b> of <b>60</b> results</p>

                            <Pagination count={10} color="primary" className="pagination" showFirstButton showLastButton/>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Dashboard;