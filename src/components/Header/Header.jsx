import React, { useContext, useState } from "react"
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from "@mui/material/Button";
import { MdMenuOpen, MdOutlineLightMode, MdOutlineMailOutline, MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox";
import { IoCartOutline, IoLogOut, IoShieldHalfSharp } from "react-icons/io5";
import { FaRegBell } from 'react-icons/fa6';
import { IoMenu } from 'react-icons/io5';
import userImg from '../../assets/images/user1.png'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import { Divider } from "@mui/material";
import { MyContext } from "../../App";
import UserAvtarImg from "../UserAvatarImg/UserAvtarImg";

const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpennotificationDrop, setIsOpennotificationDrop] = useState(false);
    const openMyAcc = Boolean(anchorEl);
    const openNotifications = Boolean(isOpennotificationDrop);

    const context = useContext(MyContext);

    const handleOpenMyAccDrop = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
        setAnchorEl(null);
    };

    const handleOpennotificationDrop = () => {
        setIsOpennotificationDrop(true);
    }
    const handleClosenotificationDrop = () => {
        setIsOpennotificationDrop(false);
    }

    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100 flex-row">
                        {/* Logo Wrapper */}
                        <div className="col-sm-2 part1">
                            <Link to="/" className="d-flex align-items-center logo">
                                <img src={logo} alt="" />
                                <span className="ml-2">HOTASH</span>
                            </Link>
                        </div>

                        {
                            context.windowWidth > 992 &&
                            <div className="col-sm-3 d-flex align-items-center part2 res-hide">
                                <Button className="rounded-circle mr-3" onClick={() => context.setIsToggleSidebar(!context.isToggleSidebar)}>
                                    {
                                        context.isToggleSidebar === false ? <MdMenuOpen /> : <MdOutlineMenu />
                                    }
                                </Button>
                                <SearchBox />
                            </div>
                        }


                        <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                            <Button className="rounded-circle mr-3" onClick={() => context.setThemeMode(!context.themeMode)}><MdOutlineLightMode /></Button>

                            <Button className="rounded-circle mr-3"><IoCartOutline /></Button>

                            <Button className="rounded-circle mr-3"><MdOutlineMailOutline /></Button>

                            {/* Notification Button */}
                            <div className="dropdownWrapper position-relative">
                                <Button className="rounded-circle mr-3" onClick={handleOpennotificationDrop}><FaRegBell /></Button>

                                <Button className="rounded-circle mr-3" onClick={() => context.openNav()}><IoMenu /></Button>

                                <Menu
                                    anchorEl={isOpennotificationDrop}
                                    className="notifications dropdown_list position-absolute"
                                    id="notifications"
                                    open={openNotifications}
                                    onClose={handleClosenotificationDrop}
                                    onClick={handleClosenotificationDrop}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >

                                    <div className="head pl-3 pb-0">
                                        <h4>Orders (12)</h4>
                                    </div>

                                    <Divider className="mb-" />

                                    <div className="scroll">
                                        <MenuItem onClick={handleCloseMyAccDrop} >
                                            <div className="d-flex">
                                                <div>
                                                    <UserAvtarImg img={userImg} />
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudal</b>
                                                            added tp his favorite list <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>

                                                    <p className="text-sky mb-0">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseMyAccDrop} >
                                            <div className="d-flex">
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src={userImg} alt=" " />
                                                    </span>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudal</b>
                                                            added tp his favorite list <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>

                                                    <p className="text-sky mb-0">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseMyAccDrop} >
                                            <div className="d-flex">
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src={userImg} alt=" " />
                                                    </span>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudal</b>
                                                            added tp his favorite list <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>

                                                    <p className="text-sky mb-0">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseMyAccDrop} >
                                            <div className="d-flex">
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src={userImg} alt=" " />
                                                    </span>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudal</b>
                                                            added tp his favorite list <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>

                                                    <p className="text-sky mb-0">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseMyAccDrop} >
                                            <div className="d-flex">
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src={userImg} alt=" " />
                                                    </span>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudal</b>
                                                            added tp his favorite list <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>

                                                    <p className="text-sky mb-0">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseMyAccDrop} >
                                            <div className="d-flex">
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src={userImg} alt=" " />
                                                    </span>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudal</b>
                                                            added tp his favorite list <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>

                                                    <p className="text-sky mb-0">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>

                                        <MenuItem onClick={handleCloseMyAccDrop} >
                                            <div className="d-flex">
                                                <div className="userImg">
                                                    <span className="rounded-circle">
                                                        <img src={userImg} alt=" " />
                                                    </span>
                                                </div>

                                                <div className="dropdownInfo">
                                                    <h4>
                                                        <span>
                                                            <b>Mahmudal</b>
                                                            added tp his favorite list <b>Leather belt steve madden</b>
                                                        </span>
                                                    </h4>

                                                    <p className="text-sky mb-0">few seconds ago</p>
                                                </div>
                                            </div>
                                        </MenuItem>
                                    </div>

                                    <div className="pl-3 pr-3 w-100 pt-2 pb-3">
                                        <Button className="btn-blue w-100">View All Notifications</Button>

                                    </div>
                                </Menu>

                            </div>

                            {
                                context.isLogin !== true ?
                                    <Link to={`/login`}><Button className="btn-blue btn-lg btn-round">Sign In</Button></Link>
                                    :
                                    // user Details
                                    <div className='myAccWrapper' >
                                        <Button className="myAcc d-flex align-items-center" onClick={handleOpenMyAccDrop}>

                                            <div className="userImg">
                                                <span className="rounded-circle">
                                                    <img src={userImg} alt=" " />
                                                </span>
                                            </div>

                                            <div className="userInfo res-hide">
                                                <h4>Rinku Verma</h4>
                                                <p className="mb-0">@rinkuv37</p>
                                            </div>
                                        </Button>

                                        <Menu
                                            anchorEl={anchorEl}
                                            id="account-menu"
                                            open={openMyAcc}
                                            onClose={handleCloseMyAccDrop}
                                            onClick={handleCloseMyAccDrop}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >

                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <ListItemIcon><PersonAdd fontSize="small" /></ListItemIcon>
                                                My account
                                            </MenuItem>

                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <ListItemIcon> <IoShieldHalfSharp /></ListItemIcon>
                                                Reset Password
                                            </MenuItem>

                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <ListItemIcon><IoLogOut /></ListItemIcon>
                                                Logout
                                            </MenuItem>
                                        </Menu>

                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;