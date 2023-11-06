import React, { useState, useEffect } from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { login, register } from "../../redux/actions/userAction";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, isAuthenticated } = useSelector((state) => state.user);
  console.log('isAuthenticated', isAuthenticated)
  console.log('error', error)
  console.log(useSelector((state) => state));

  const loginSubmit = (e) => {
    e.preventDefault();
    // if(loginEmail ===""){
    //   toast.error("Email Required ", {
    //     position: toast.POSITION.TOP_RIGHT,
    //     autoClose: 1000,
    //   });
    // } else if(loginPassword === ""){
    //   toast.error(error, {
    //     position: toast.POSITION.TOP_RIGHT,
    //     autoClose: 1000,
    //   });
    // }else{
      dispatch(login(loginEmail, loginPassword));
     // navigate("/");
   // }
 
  };
  useEffect(() => {
    if (isAuthenticated) {
      // navigate("/account") //Earlier
      console.log("test_loginPage");
       //Now
    }
  }, [dispatch, error, alert, isAuthenticated, navigate, redirect]);

  return (
    <>
      <section className="login-sec">
        <div className="container-fluid">
          <div className="row login-innr">
            <span className="login-before-sec">
              <img
                src="/img/login-before.png"
                className="img-fluid d-block"
                alt="login-before"
              />
            </span>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
              <div className="login-caption">
                <img src="/img/loging-logo.png" alt="login logo" />
                <p>hello,</p>
                <h3>welcome</h3>
                <form action="" className="login-form-caption">
                  <input
                    type="Email"
                    className="form-control"
                    id="Email"
                    placeholder="Email"
                    name="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                  <input
                    type="Password"
                    className="form-control"
                    id="Password"
                    placeholder="Password"
                    name="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                  <ul className="login-check-bx">
                    <li>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="check"
                      />
                      <span className="lft-pdng">Remember Me</span>
                    </li>
                    <li>
                      <span>Forget Password?</span>
                    </li>
                  </ul>
                  <div className="d-flex login-button-row">
                    <button
                      type="button"
                      className="btn-info login-button"
                      id="login-button"
                      onClick={loginSubmit}
                    >
                      login
                    </button>
                    <button
                      type="button"
                      className="btn-info signup-button"
                      id="signup"
                    >
                      Sign Up
                    </button>
                  </div>
                  <h5 className="line-bdr">or</h5>
                  <div className="social-caption">
                    <ul className="d-flex justify-content-between">
                      <li style={{ marginRight: "20px" }}>
                        <img
                          src="/img/login-search.png"
                          className="img-fluid d-block"
                          alt="google img"
                        />
                        <a>Sign up with google</a>
                      </li>
                      <li>
                        <img
                          src="/img/login-facebook.png"
                          className="img-fluid d-block"
                          alt="facebook img"
                        />
                        <a>Sign up with facebook</a>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
              <div className="login-right-img">
                <img
                  src="/img/login-right-img.png"
                  className="img-fluid d-block"
                  alt="login right img"
                />
              </div>
            </div>
            <span className="login-after-sec">
              <img
                src="/img/login-after.png"
                className="img-fluid d-block"
                alt="login-after"
              />
            </span>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
}

export default Login;
