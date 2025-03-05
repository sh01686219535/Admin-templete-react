import { useContext, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { MyContext } from "../../App";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import google from "../../assets/images/google.png";

function Register() {
    const context = useContext(MyContext);
    useEffect(()=>{
        context.setisHideSidebarandheader(true);
    },[]);
    return (
        <>
         <section className="loginSection">
                <div className="loginBox">
                    <div className="logo text-center">
                        <img src={logo} className="inline-block" width="60px" alt="" />
                        <h5 className="font-bold">Register to Hotash</h5>
                    </div>
                    <div className="wrapper register">
                        <div className="login-from">
                            <form action="#" method="post" className="form">
                                <input type="text" id="name" name="name" placeholder="Enter User Name" />
                                <input type="email" id="email" name="email" placeholder="Enter Email" />
                                <input type="password" id="password" name="password" placeholder="Enter password" />
                                <input type="password" id="password" name="password" placeholder="Enter Confirm password" />
                                <button type="submit">Sign Up</button>
                            </form>
                            <div className="flex items-center justify-center or-line">
                                <span className="line"></span>
                                <span className="text">or</span>
                                <span className="line"></span>
                            </div>
                            <Link to="/login">
                                <div className="google-btn capitalize text-center" >
                                    <Button variant="outlined" color="success">
                                        <img src={google} alt="" width={'40px'} height={'40px'} /> sign in with google
                                    </Button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="login-bottom flex items-center justify-center">
                        <h5 className="login-bottom-text">
                            Already Registrad.
                        </h5>
                        <div className="login-btn">
                            <Link to="/login">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register;