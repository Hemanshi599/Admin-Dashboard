import React, { useContext, useEffect, useState } from 'react';
import Logo from '../../assets/images/logo.png';
import Pattern from '../../assets/images/pattern.png';
import { IoMdMail } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { MyContext } from '../../App';
import Button from "@mui/material/Button";
import { Link, Links } from 'react-router-dom';
import Google from '../../assets/images/Google.png';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { IoMdHome } from "react-icons/io";

const SignUp = () => {
    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
    const context = useContext(MyContext);

    useEffect(() => {
        context.setIsHideSidebarAndHeader(true);
        window.scrollTo(0, 0);

    }, [])

    const focusInput = (index) => {
        setInputIndex(index);
    }

    return (
        <>
            <img src={Pattern} alt=" " className='loginPattern' />
            <section className='loginSection signUpSection'>

                <div className='row'>
                    <div className='col-md-8 d-flex align-items-center flex-column part1 justify-content-center'>
                        <h1>BEST UX/UI FASHION <span className='text-sky'> ECOMMERCE DASHBOARD</span> & ADMIN PANEL</h1>
                        <p>Elit Iusto dolore libero recusandae dolor dolores explicabo ullam cum facilis aperiam alias odio quam excepturi molestiae omnis inventore. Repudiandae officia placeat amet consectetur dicta dolorem quo</p>

                        <div className='w-100 mt-3'>
                            <Link to={'/'}>
                                <Button className='btn-blue btn-lg btn-big'><IoMdHome />Go To Home</Button>
                            </Link>
                        </div>
                    </div>

                    <div className='col-md-4 pr-0'>
                        <div className="loginBox">
                            <div className='logo text-center'><img src={Logo} alt=" " width="70px" />
                                <h5 className='font-weight-bold'>Register a new account</h5>
                            </div>

                            <div className="wrapper mt-3 card border p-10">
                                <form>
                                    <div className={`form-group mb-3 position-relative ${inputIndex === 0 && 'focus'}`}>
                                        <span className='icon'> <FaUserCircle /></span>
                                        <input type="text" className='form-control' placeholder='enter your name' onFocus={() => focusInput(0)} onBlur={() => setInputIndex(null)} autoFocus />
                                    </div>

                                    <div className={`form-group mb-3 position-relative ${inputIndex === 1 && 'focus'}`}>
                                        <span className='icon'> <IoMdMail /></span>
                                        <input type="text" className='form-control' placeholder='enter your email' onFocus={() => focusInput(1)} onBlur={() => setInputIndex(null)} />
                                    </div>

                                    <div className={`form-group position-relative ${inputIndex === 2 && 'focus'}`}>
                                        <span className='icon'> <RiLockPasswordFill /></span>

                                        <input type={`${isShowPassword === true ? 'text' : 'password'}`} className='form-control' placeholder='enter your password' onFocus={() => focusInput(2)} onBlur={() => setInputIndex(null)} />

                                        <span className='toggleShowPassword' onClick={() => setIsShowPassword(!isShowPassword)}>
                                            {
                                                isShowPassword === true ? <IoMdEyeOff /> : <IoMdEye />
                                            }

                                        </span>
                                    </div>

                                    <div className={`form-group position-relative ${inputIndex === 3 && 'focus'}`}>
                                        <span className='icon'> <IoShieldCheckmarkSharp /></span>

                                        <input type={`${isShowConfirmPassword === true ? 'text' : 'password'}`} className='form-control' placeholder='confirm your password' onFocus={() => focusInput(3)} onBlur={() => setInputIndex(null)} />

                                        <span className='toggleShowPassword' onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}>
                                            {
                                                isShowConfirmPassword === true ? <IoMdEyeOff /> : <IoMdEye />
                                            }

                                        </span>
                                    </div>

                                    <FormControlLabel control={<Checkbox />} label="I agree to the all Terms & Conditions" />

                                    <div className='form-group'>
                                        <Button className="btn-blue btn-lg w-100 btn-big">Sign Up</Button>
                                    </div>

                                    <div className='d-flex align-items-center justify-content-center or mt-3 mb-3'>
                                        <span className='line'></span>
                                        <span className='txt'>or</span>
                                        <span className='line'></span>
                                    </div>

                                    <Button variant="outlined" className='w-100 btn-lg btn-big loginWithGoogle'>
                                        <img src={Google} width="25px" />Sign In with Google</Button>
                                </form>

                                <span className='text-center d-block mt-3'>
                                    Don't have an account?
                                    <Link to={`/login`} className='link color' style={{ marginLeft: "4px" }}>Sign In</Link>
                                </span>

                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default SignUp;
