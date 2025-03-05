import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from '@mui/material/Button';
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import Searchbox from "../SearchBox/Searchbox";
import { MdOutlineLightMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import userImg from "../../assets/images/user.webp";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { FaShieldAlt } from "react-icons/fa";
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useContext, useState } from "react";
import { Divider } from "@mui/material";
import { MyContext } from "../../App";



function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpennotificationDrop, handlenotificationClose] = useState(false);

    const openMyacc = Boolean(anchorEl);
    const openNptofication = Boolean(isOpennotificationDrop);
    const handleuserAccdrop = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleuseraccClose = () => {
        setAnchorEl(null);
    };
    const handlenotificationOpen = () => {
        handlenotificationClose(true);
    }
    const handleDropnotification = () => {
        handlenotificationClose(false);
    }
    const context = useContext(MyContext);
    return (
        <div>
            <header className="flex items-center">
                <div className="w-full head-main">
                    <div className="flex items-center">
                        <div className="w-1/5">
                            <Link to={'/'} className="flex items-center">
                                <img src={logo} className="logo" />
                                <span className="d-text">HOTASH</span>
                            </Link>
                        </div>
                        <div className="w-1/3 flex items-center">
                           <div>
                           <Button className="head-menu-btn-1 rounded"
                           onClick={()=>context.setIstoggleSidebar(!context.isToggleSidebar)}
                           >
                            {
                                context.isToggleSidebar === false ? <MdOutlineMenuOpen /> :
                                <MdMenu/>
                            }
                            </Button>
                           </div>
                            <Searchbox />
                        </div>
                        <div className="w-2/4 flex items-center justify-end">
                            <Button className="head-menu-btn-1 rounded"
                            onClick={()=>context.setThemeMode(!context.themeMode)}
                            >
                                <MdOutlineLightMode />
                            </Button>
                            <Button className="head-menu-btn-1 rounded"
                            >
                                <IoCartOutline />
                            </Button>

                            <Button className="head-menu-btn-1 rounded">
                                <MdOutlineMail />
                            </Button>
                            <div className="notficationWrapper relative">
                                <Button className="head-menu-btn-1 rounded"
                                    onClick={handlenotificationOpen}
                                >
                                    <FaRegBell />
                                </Button>
                                <Menu
                                    anchorEl={isOpennotificationDrop}
                                    className="notification dropdown_list"
                                    id="notification"
                                    open={openNptofication}
                                    onClose={handleDropnotification}
                                    onClick={handleDropnotification}
                                    slotProps={{
                                        paper: {
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&::before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        },
                                    }}

                                >
                                    <div className="head">
                                        <h4>Orders (12)</h4>
                                    </div>
                                    <Divider className="divider-notification" />
                                    <div className="scroll">
                                        <MenuItem onClick={handleDropnotification}>
                                            <div className="flex items-center">
                                                <div className="rounded-circle">
                                                    <div className="userImg">
                                                        <span className="rounded-circle rounded-full cursor-pointer">
                                                            <img src={userImg} alt="" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropdownInfo">
                                                    <h4><span><b>Mahmudul </b>added to his favorite list<b> Leather belt steve madden</b></span></h4>
                                                    <p className="text-sky">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleDropnotification}>
                                            <div className="flex items-center">
                                                <div className="rounded-circle">
                                                    <div className="userImg">
                                                        <span className="rounded-circle rounded-full cursor-pointer">
                                                            <img src={userImg} alt="" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropdownInfo">
                                                    <h4><span><b>Mahmudul </b>added to his favorite list<b> Leather belt steve madden</b></span></h4>
                                                    <p className="text-sky">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleDropnotification}>
                                            <div className="flex items-center">
                                                <div className="rounded-circle">
                                                    <div className="userImg">
                                                        <span className="rounded-circle rounded-full cursor-pointer">
                                                            <img src={userImg} alt="" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropdownInfo">
                                                    <h4><span><b>Mahmudul </b>added to his favorite list<b> Leather belt steve madden</b></span></h4>
                                                    <p className="text-sky">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleDropnotification}>
                                            <div className="flex items-center">
                                                <div className="rounded-circle">
                                                    <div className="userImg">
                                                        <span className="rounded-circle rounded-full cursor-pointer">
                                                            <img src={userImg} alt="" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropdownInfo">
                                                    <h4><span><b>Mahmudul </b>added to his favorite list<b> Leather belt steve madden</b></span></h4>
                                                    <p className="text-sky">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleDropnotification}>
                                            <div className="flex items-center">
                                                <div className="rounded-circle">
                                                    <div className="userImg">
                                                        <span className="rounded-circle rounded-full cursor-pointer">
                                                            <img src={userImg} alt="" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropdownInfo">
                                                    <h4><span><b>Mahmudul </b>added to his favorite list<b> Leather belt steve madden</b></span></h4>
                                                    <p className="text-sky">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleDropnotification}>
                                            <div className="flex items-center">
                                                <div className="rounded-circle">
                                                    <div className="userImg">
                                                        <span className="rounded-circle rounded-full cursor-pointer">
                                                            <img src={userImg} alt="" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropdownInfo">
                                                    <h4><span><b>Mahmudul </b>added to his favorite list<b> Leather belt steve madden</b></span></h4>
                                                    <p className="text-sky">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleDropnotification}>
                                            <div className="flex items-center">
                                                <div className="rounded-circle">
                                                    <div className="userImg">
                                                        <span className="rounded-circle rounded-full cursor-pointer">
                                                            <img src={userImg} alt="" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="dropdownInfo">
                                                    <h4><span><b>Mahmudul </b>added to his favorite list<b> Leather belt steve madden</b></span></h4>
                                                    <p className="text-sky">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                    </div>
                                    <div className="notification-btn">
                                        <a href="#" className="bg-indigo-500 text-white p-6">view all notification</a>
                                    </div>
                                </Menu>
                            </div>

                            <div className="myaccWrapper">
                                <Button className="myacc flex items-center"
                                    onClick={handleuserAccdrop}
                                >
                                    <div className="userImg">
                                        <span className="rounded-circle rounded-full cursor-pointer">
                                            <img src={userImg} alt="" />
                                        </span>
                                    </div>
                                    <div className="userInfo">
                                        <h4>Md.Shariful islam</h4>
                                        <p className="mb-0">Sharif55</p>

                                    </div>
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={openMyacc}
                                    onClose={handleuseraccClose}
                                    onClick={handleuseraccClose}
                                    slotProps={{
                                        paper: {
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&::before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >

                                    <MenuItem onClick={handleuseraccClose}>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        My account
                                    </MenuItem>
                                    <MenuItem onClick={handleuseraccClose}>
                                        <ListItemIcon>
                                            <FaShieldAlt />
                                        </ListItemIcon>
                                        Reset Password
                                    </MenuItem>
                                    <MenuItem onClick={handleuseraccClose}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;