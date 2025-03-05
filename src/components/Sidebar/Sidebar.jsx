import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaProductHunt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { Link } from 'react-router-dom';
import {  useState } from 'react';
import { IoMdLogOut } from "react-icons/io";
// import { MyContext } from '../../App';
import { FaUserAlt } from "react-icons/fa";


const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubMenu, setIsToggleSubMenu] = useState(false);

    const isOpenSubmenu = (index) => {
        setActiveTab(index);
        setIsToggleSubMenu(!isToggleSubMenu);
    }
    // const context = useContext(MyContext);
    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/">
                            <Button className={`w-full ${activeTab === 0 && isToggleSubMenu === true  ? 'active' : ''}`} onClick={() => isOpenSubmenu(0)}>
                                <span className='icon'><MdDashboard /></span>
                                Dashboard
                                <span className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className={`w-full ${activeTab === 1 && isToggleSubMenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}>
                            <span className='icon'><FaProductHunt /></span>
                            products
                            <span className='arrow'><IoIosArrowForward /></span>
                        </Button>
                        <div className={`submenuwapper ${activeTab === 1 && isToggleSubMenu === true ? 'colapse' : 'colapsed'}`}>
                            <div className="submenu">
                                <ul>
                                    <li><Link to="#">Product List</Link></li>
                                    <li><Link to="#">Product View</Link></li>
                                    <li><Link to="#">Product Upload</Link></li>
                                </ul>
                            </div>
                        </div>

                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-full ${activeTab === 2 && isToggleSubMenu === true  ? 'active' : ''}`} onClick={() => isOpenSubmenu(2)}>
                                <span className='icon'><FaCartPlus /></span>
                                orders
                                <span className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-full ${activeTab === 3 && isToggleSubMenu === true  ? 'active' : ''}`} onClick={() => isOpenSubmenu(3)}>
                                <span className='icon'><MdMessage /></span>
                                message
                                <span className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-full ${activeTab === 4 && isToggleSubMenu === true  ? 'active' : ''}`} onClick={() => isOpenSubmenu(4)}>
                                <span className='icon'><FaBell /></span>
                                notifications
                                <span className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-full ${activeTab === 5 && isToggleSubMenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(5)}>
                                <span className='icon'><IoSettings /></span>
                                Settings
                                <span className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <Button className={`w-full ${activeTab === 6 && isToggleSubMenu === true  ? 'active' : ''}`} onClick={() => isOpenSubmenu(6)}>
                                <span className='icon'><FaUserAlt /></span>
                                Login
                                <span className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/register">
                            <Button className={`w-full ${activeTab === 7 && isToggleSubMenu === true  ? 'active' : ''}`} onClick={() => isOpenSubmenu(7)}>
                                <span className='icon'><FaUserAlt /></span>
                                Register
                                <span className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>

                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-full ${activeTab === 8 && isToggleSubMenu === true  ? 'active' : ''}`} onClick={() => isOpenSubmenu(8)}>
                                <span className='icon'><FaCartPlus /></span>
                                orders
                                <span className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-full ${activeTab === 9 && isToggleSubMenu === true  ? 'active' : ''}`} onClick={() => isOpenSubmenu(9)}>
                                <span className='icon'><MdMessage /></span>
                                message
                                <span className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-full ${activeTab === 10 && isToggleSubMenu === true  ? 'active' : ''}`} onClick={() => isOpenSubmenu(10)}>
                                <span className='icon'><FaBell /></span>
                                notifications
                                <span className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-full ${activeTab === 11 && isToggleSubMenu === true  ? 'active' : ''}`} onClick={() => isOpenSubmenu(11)}>
                                <span className='icon'><IoSettings /></span>
                                Settings
                                <span className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-full ${activeTab === 12 && isToggleSubMenu === true  ? 'active' : ''}`} onClick={() => isOpenSubmenu(12)}>
                                <span className='icon'><IoSettings /></span>
                                Settings
                                <span className='arrow'><IoIosArrowForward /></span>
                            </Button>
                        </Link>
                    </li>
                </ul>
                <div className="logoutWrapper">
                    <div className="logoutBox">
                        <Button variant="contained"><IoMdLogOut/>Logout</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Sidebar;