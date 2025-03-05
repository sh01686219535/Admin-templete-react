import { useContext, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { MyContext } from "../../App";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import google from "../../assets/images/google.png";

const Login = () => {
    const context = useContext(MyContext);
    useEffect(() => {
        context.setisHideSidebarandheader(true);
    }, []);
    return (
        <>
            <section className="loginSection">
                <div className="loginBox">
                    <div className="logo text-center">
                        <img src={logo} className="inline-block" width="60px" alt="" />
                        <h5 className="font-bold">Login to Hotash</h5>
                    </div>
                    <div className="wrapper">
                        <div className="login-from">
                            <form action="#" method="post" className="form">
                                <input type="email" id="email" name="email" placeholder="Enter Email" />
                                <input type="password" id="password" name="password" placeholder="Enter password" />
                                <button type="submit">Sign In</button>
                            </form>
                            <Link to="/login">
                                <b className="text-center capitalize block text-2xl font-bold">forget password</b>
                            </Link>
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
                            Do not have an account?
                        </h5>
                        <div className="login-btn">
                            <Link to="/register">
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Login;