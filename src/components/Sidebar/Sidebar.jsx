import React, { useContext, useState } from 'react'
import Button from '@mui/material/Button';
import { FaAngleRight } from "react-icons/fa";
import { MdPix } from "react-icons/md";
import { FaFileInvoice } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { TbMessageFilled, TbRulerMeasure } from "react-icons/tb";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { BiSolidFileBlank } from "react-icons/bi";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";
import { MyContext } from '../../App';
import { FaUser } from "react-icons/fa";

const Sidebar = () => {

    const [activeTab, setActiveTab] = useState(null);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);
    const navigate = useNavigate();
    const context = useContext(MyContext);

    const isOpenSubmenu = (index) => {
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu);
    }

    const handleLogin = () => {
        navigate('/login')
    }

    const handleSignUp = () => {
        navigate('/signUp')
    }

    return (
        <div className='sidebar'>
            <ul>
                <li>
                    <Link to="/" >
                        <Button className={`w-100 ${activeTab === 0 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(0)}>
                            <span className='icon'><MdDashboard /></span>
                            Dashboard
                        </Button>
                    </Link>
                </li>

                <li>
                    <Button className='w-100' onClick={handleLogin}>
                        <span className='icon'><FaUser /></span>
                        Login
                    </Button>
                </li>

                <li>
                    <Button className='w-100' onClick={handleSignUp}>
                        <span className='icon'><FaUser /></span>
                        Sign Up
                    </Button>
                </li>

                <li>
                    <Button
                        className={`w-100 ${activeTab === 1 && isToggleSubmenu === true ? 'active' : ''}`}
                        onClick={() => isOpenSubmenu(1)}
                    >
                        <span className="icon"><MdPix /></span>
                        Products
                        <span className="arrow"><FaAngleRight /></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab === 1 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                        <ul className="submenu">
                            <li><Link to="/products/list">Product List</Link></li>
                            <li><Link to="/products/details">Product View</Link></li>
                            <li><Link to="/products/upload">Product Upload</Link></li>
                        </ul>
                    </div>
                </li>

                <li>
                    <Link to="/">
                        <Button className={`w-100 ${activeTab === 2 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(2)}>
                            <span className='icon'><FaCartArrowDown /></span>
                            Orders
                            <span className="arrow"><FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>

                <li>
                    <Link to="/">
                        <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`}>
                            <span className='icon'><TbMessageFilled /></span>
                            Messages
                        </Button>
                    </Link>
                </li>

                <li>
                    <Link to="/" >
                        <Button className={`w-100 ${activeTab === 4 ? 'active' : ''}`}>
                            <span className='icon'><IoIosNotifications /></span>
                            Notifications
                        </Button>
                    </Link>
                </li>

                <li>
                    <Link to="/" >
                        <Button className={`w-100 ${activeTab === 5 ? 'active' : ''}`}>
                            <span className='icon'><IoSettingsSharp /></span>
                            Settings
                        </Button>
                    </Link>
                </li>

                <li>
                    <Link to="/" >
                        <Button className={`w-100 ${activeTab === 6 ? 'active' : ''}`}>
                            <span className='icon'><FaFileInvoice /></span>
                            InVoice
                        </Button>
                    </Link>
                </li>

                <li>
                    <Button className={`w-100 ${activeTab === 7 ? 'active' : ''}`}>
                        <span className='icon'><FaShippingFast /></span>
                        Shipping
                    </Button>
                </li>

                <li>
                    <Button className={`w-100 ${activeTab === 8 ? 'active' : ''}`}>
                        <span className='icon'><BiSolidFileBlank /></span>
                        Blank Page
                    </Button>
                </li>
            </ul>

            <br />

            <div className='logoutWrapper'>
                <div className='logoutBox'>
                    <Button variant='contained'><IoMdLogOut /> Logout</Button>
                </div>
            </div>

        </div >
    )
}

export default Sidebar;
