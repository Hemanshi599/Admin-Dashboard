import React, { useContext, useEffect, useState } from 'react';
import Logo from '../../assets/images/logo.png';
import Pattern from '../../assets/images/pattern.png';
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { MyContext } from '../../App';
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import Google from '../../assets/images/Google.png';

const Login = () => {

  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHideSidebarAndHeader(true);
  }, [])

  const focusInput = (index) => {
    setInputIndex(index);
  }

  return (
    <>
      <img src={Pattern} alt=" " className='loginPattern' />
      <section className='loginSection'>
        <div className="loginBox">
          <div className='logo text-center'><img src={Logo} alt=" " width="70px" />
            <h5 className='font-weight-bold'>Login to Hotash</h5>
          </div>

          <div className="wrapper mt-3 card border p-10">
            <form>
              <div className={`form-group mb-3 position-relative ${inputIndex === 0 && 'focus'}`}>
                <span className='icon'> <IoMdMail /></span>
                <input type="text" className='form-control' placeholder='enter your email' onFocus={() => focusInput(0)} onBlur={() => setInputIndex(null)} autoFocus />
              </div>

              <div className={`form-group position-relative ${inputIndex === 1 && 'focus'}`}>
                <span className='icon'> <RiLockPasswordFill /></span>

                <input type={`${isShowPassword === true ? 'text' : 'password'}`} className='form-control' placeholder='enter your password' onFocus={() => focusInput(1)} onBlur={() => setInputIndex(null)} />

                <span className='toggleShowPassword' onClick={() => setIsShowPassword(!isShowPassword)}>
                  {
                    isShowPassword === true ? <IoMdEyeOff /> : <IoMdEye />
                  }

                </span>
              </div>

              <div className='form-group'>
                <Button className="btn-blue btn-lg w-100 btn-big">Sign In</Button>
              </div>

              <div className='form-group text-center mb-0'>
                <Link to={`/forgot-password`} className='link' >FORGOT PASSWORD</Link>
              </div>

              <div className='d-flex align-items-center justify-content-center or mt-3 mb-3'>
                <span className='line'></span>
                <span className='txt'>or</span>
                <span className='line'></span>
              </div>

              <Button variant="outlined" className='w-100 btn-lg btn-big loginWithGoogle'>
                <img src={Google} width="25px"/>Sign In with Google</Button>
            </form>
          </div>

          <div className="wrapper mt-3 card border p-3 footer">
            <span className='text-center'>
              Don't have an account?
              <Link to={`/signUp`} className='link color' style={{marginLeft:"4px"}}>Register</Link>
            </span>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Login;
