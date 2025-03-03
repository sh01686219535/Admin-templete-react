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

function Dashboard() {
    const [anchorEl, setAnchorEl] = useState(null);
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
        'chartArea':{'width':'100%','height':'100%'}
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
            </div>
        </div>
    );
}

export default Dashboard;