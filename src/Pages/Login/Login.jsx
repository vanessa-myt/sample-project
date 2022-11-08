import React from 'react';
import { Row, Col } from 'react-bootstrap';

import "./Login.css";

//IMG
import logo from "../../Assets/Login/myt_logo.png";
import username from "../../Assets/Login/username.png";
import padlock from "../../Assets/Login/padlock1.png";

function Login() {
  return (
    <div className=''>
      <div className='container'>
        <Row className='pt-5'>
          <Col>
          <img src={logo} width={450} height={180}></img>
          </Col>
        </Row>
        <Row className='center pt-5'>
          <Col xs='5'>
              <div className="input-group mb-3">
                  <div className="input-group-prepend icon-cont">
                      <span className="input-group-text center btn-login" >
                          <img src={username} alt="branchcode" className="center img-icon"/> 
                      </span>
                  </div>
                  <input type="text" className="form-control branch_code-input input-text" placeholder="Branch" aria-label="Branch" aria-describedby="basic-addon1"  />
              </div>
          </Col>
        </Row>
        <Row className='center'>
          <Col xs='5'>
              <div className="input-group mb-3">
                  <div className="input-group-prepend icon-cont">
                      <span className="input-group-text center btn-login" >
                          <img src={padlock} alt="branchcode" className="img-icon"/> 
                      </span>
                  </div>
                  <input type="text" className="form-control branch_code-input input-text" placeholder="Branch" aria-label="Branch" aria-describedby="basic-addon1"  />
              </div>
          </Col>
        </Row>
        <Row className='center'>
          <Col xs='3'>
            <button className='login-btn'>LOGIN</button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Login