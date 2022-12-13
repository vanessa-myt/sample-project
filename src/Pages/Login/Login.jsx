import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//css
import "./Login.css";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../../Assets/Login/myt_logo.png"
import { loginUser } from "../../Helpers/API/authApi";
import { formatDateWithTime, getUser, refreshPage } from "../../Helpers/Utils/Common";
import { useEffect } from "react";

function Login() {
  const navigate = useNavigate()
  const [branchcode, setBranchcode] = useState("BDO");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [disableClick, setDisableClick] = useState(false);

  function togglePassword(){
    setShowPassword(!showPassword);
  };

  function logScreen(id){
    console.log(`User: ${id} - Screen: ${window.location.href} - DateTime: ${formatDateWithTime(new Date())}`)
  }

  async function login() {
      setDisableClick(true);
      const response = await loginUser(username,password,branchcode);
      if(response.data) {
          logScreen(response.data.id)
          toast.success('SUCCESSFUL LOGIN!',
            { autoClose: 2000, hideProgressBar: true, theme:"colored" });
          if(response.data.password_reset != null){
              
              setTimeout(() => {
                  localStorage.setItem('user',  JSON.stringify(response.data.id));
                  localStorage.setItem('name',  JSON.stringify(response.data.first_name + " " + response.data.last_name ));
                  localStorage.setItem('type',  JSON.stringify(response.data.type));
                  localStorage.setItem('branch_type',  JSON.stringify(response.data.branch_type));
                  localStorage.setItem('role',  JSON.stringify(response.data.role));
                  localStorage.setItem('api_key',  JSON.stringify(response.data.api_key));
                  localStorage.setItem('token',  JSON.stringify(response.data.token));
                  localStorage.setItem('branch',  JSON.stringify(response.data.branch_id));
                  localStorage.setItem('branch_name',  JSON.stringify(response.data.branch_name));
                  localStorage.setItem('services', JSON.stringify(response.data.services));
                  localStorage.setItem('region', JSON.stringify(response.data.branch_region));
                  localStorage.setItem('city', JSON.stringify(response.data.branch_city));
                  navigate('/dashboard')
                  refreshPage()
              }, 2000);
              
          }
      } 
      else if(response.error) {
          setDisableClick(false);
          toast.error(response.error.data.messages.error.toUpperCase(),
            { autoClose: 4000, hideProgressBar: true, theme:"colored" });
          // setTimeout(() => {
          //     refreshPage();
          // }, 4000);
      }
  }

  return (
    <div className="d-flex justify-content-center mt-10">
      <ToastContainer />
      <div className="login-cont">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img src={logo} alt="logo"  width={300} height={100}  className="login-logo"/>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center username-cont">
            <div class="input-group mb-3">
              <div class="input-group-prepend icon-cont">
                <span
                  class="input-group-text icon-text custom-border-radius"
                  id="basic-addon1"
                >
                   <FontAwesomeIcon
                  icon={"fa-user"}
                  alt={"user"}
                />
                </span>
              </div>
              <input
                type="text"
                class="form-control username-input"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center password-cont">
            <div class="input-group mb-3 password-wrapper-login">
              <div class="input-group-prepend icon-cont">
                <span
                  class="input-group-text icon-text custom-border-radius"
                  id="basic-addon1"
                >
                  <FontAwesomeIcon
                  icon={"fa-lock"}
                  alt={"eye"}
                  // className={showPassword ? "eye-login" : "eye-slash-login"}
                  aria-hidden="true"
                  onClick={togglePassword}
                />
                </span>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                class="form-control password-input"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                autocomplete="on"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div class="input-group-append icon-cont">
                {/* <span> */}
                <span
                  class="input-group-text eye-icon-text"
                  // id="basic-addon1"
                >
                  <FontAwesomeIcon
                    icon={showPassword ? "eye" : "eye-slash"}
                    alt={"eye"}
                    className={showPassword ? "eye-login" : "eye-slash-login"}
                    aria-hidden="true"
                    onClick={togglePassword}
                  />
                </span>
              </div>
             
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col d-flex justify-content-center login-btn-cont">
            {disableClick === true && (
              <ReactLoading
                type="spinningBubbles"
                color="var(--secondary-color)"
              />
            )}
            {disableClick === false && (
              <button
                type="submit"
                className="login-btn"
                onClick={login}
              >
                LOGIN
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
